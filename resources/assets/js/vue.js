import VueRouter from "vue-router";

Vue.use(VueRouter);

// import zh_CN from 'vee-validate/dist/locale/zh_CN';
import zh_CN from './locale/VeeValidate/zh-CN';

import VeeValidate, { Validator } from 'vee-validate';

Validator.localize('zh-CN', zh_CN);

Vue.use(VeeValidate);

import App from './components/App';

Vue.component('app', App);

//Vue.component('example-component', require('./components/home.vue'));
import router from './routes';

new Vue({
    el: '#app',
    router
});
