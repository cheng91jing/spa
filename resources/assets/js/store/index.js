import Vuex from 'vuex'

Vue.use(Vuex)

import AuthUser from './modules/auth-user'
import Login from './modules/login'

export default new Vuex.Store({
    modules: {
        AuthUser,
        Login
    },
    strict: true
})
