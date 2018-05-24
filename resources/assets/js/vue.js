import VueRouter from "vue-router"

import store from './store/index'

import router from './routes'

import App from './components/App'

import Passport from './helpers/passport'

// import zh_CN from 'vee-validate/dist/locale/zh_CN';
import zh_CN from './locale/VeeValidate/zh-CN'

import VeeValidate, { Validator } from 'vee-validate'

Validator.localize('zh-CN', zh_CN)

axios.interceptors.request.use(function (config) {
    if(Passport.getToken()){
        config.headers['Authorization'] = 'Bearer ' + Passport.getToken()
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

Vue.use(VeeValidate)

Vue.use(VueRouter)

Vue.component('app', App)

new Vue({
    el: '#app',
    router,
    store
});
