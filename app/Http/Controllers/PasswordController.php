<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PasswordController extends Controller
{
    public function update(Request $request)
    {
        $request->user()->update(['password' => bcrypt($request->input('password'))]);

        return response()->json([
            'status' => true
        ]);
    }
}
