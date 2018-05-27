import Passport from './../../helpers/passport'

export default {
    actions: {
        loginRequest({dispatch}, formData){
            return axios.post('/api/login', formData).then(async response => {
                await dispatch('loginSuccess', response.data)
            })
        },
        async loginSuccess({dispatch}, tokenResponse){
            Passport.setToken(tokenResponse.token)
            // this.$store.state.AuthUser.authenticated = true
            await dispatch('setAuthUser')
        },
        logoutRequest({dispatch}){
            return axios.post('/api/logout').then(response => {
                Passport.removeToken()
                dispatch('unsetAuthUser')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
