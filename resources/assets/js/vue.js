import VueRouter from "vue-router";

import router from './routes';

Vue.use(VueRouter);

import App from './components/App';

Vue.component('app', App);

//Vue.component('example-component', require('./components/home.vue'));

new Vue({
    el: '#app',
    router
});
