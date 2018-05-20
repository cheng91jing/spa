import VueRouter from "vue-router";

import router from './routes';

Vue.use(VueRouter);


//Vue.component('example-component', require('./components/home.vue'));

new Vue({
    el: '#app',
    router
});
