import Passport from './../../helpers/passport'

export default {
    actions: {
        loginRequest({dispatch}, formData){
            axios.post('/api/login', formData).then(response => {
                Passport.setToken(response.data.token)
                // this.$store.state.AuthUser.authenticated = true
                dispatch('setAuthUser')
            }).catch(error => {
                console.log(error.response.data);
            })
        }
    }
}
