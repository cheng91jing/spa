<?php
/**
 * 代理token
 */

namespace App\Http\Proxy;

use Carbon\Carbon;
use Carbon\CarbonInterval;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class TokenProxy
{

    protected $http;

    /**
     * TokenProxy constructor.
     *
     * @param $http
     */
    public function __construct(Client $http)
    {
        $this->http = $http;
    }

    public function login($username, $password)
    {
        if (auth()->attempt(['email' => $username, 'password' => $password, 'is_active' => 1])) {
            return $this->proxy('password', [
                'username' => $username,
                'password' => $password,
                'scope'    => '',
            ]);
        }
        return response()->json([
            'status' => false,
            'message' => 'Credentials not match',
        ], 421);
    }

    public function refresh(Request $request)
    {
        $refreshToken = $request->cookie('refresh_token');

        return $this->proxy('refresh_token', [
            'refresh_token' => $refreshToken
        ]);
    }

    public function proxy($grantType, array $data)
    {
        $data     = array_merge($data, [
            'grant_type'    => $grantType,
            'client_id'     => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
            //'scope'         => '',
        ]);
        $response = $this->http->post(url('/oauth/token'), [
            'form_params' => $data,
        ]);

        $token = json_decode((string) $response->getBody(), true);

        return response()->json([
            'token'      => $token['access_token'],
            'expires_in' => $token['expires_in'],
        ])->cookie('refresh_token', $token['refresh_token'], 10 * 24 * 60, null, null, false, true);
    }

    public function logout()
    {
        $user = \Auth::guard('api')->user();
        $response = response()->json([
            'message' => 'logout!'
        ], 204);
        if($user){
            $access_token = $user->token();

            app('db')->table('oauth_refresh_tokens')
                ->where('access_token_id', $access_token->id)
                ->update([
                    'revoked' => true
                ]);

            $access_token->revoke();

            $cookie = app('cookie')->forget('refresh_token');
            $response->cookie($cookie);
        }
        return $response;
    }


}
