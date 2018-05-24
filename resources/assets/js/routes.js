import VueRouter from "vue-router";

import Store from './store/index';

import Passport from './helpers/passport'

let routes = [
    {
        path: '/',
        name: 'home',
        component: require('./components/pages/Home'),
        meta: {}
    },
    {
        path: '/about',
        component: require('./components/pages/About'),
        meta: {}
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('./components/posts/Post'),
        meta: {}
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/register/Register'),
        meta: {requiresGuest: true}
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login'),
        meta: {requiresGuest: true}
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Email'),
        meta: {}
    },
    {
        path: '/profile',
        name: 'profile',
        component: require('./components/user/Profile'),
        meta: {requiresAuth: true}
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (!Store.state.authenticated && !Passport.getToken()) {
            return next({'name': 'login'})
        }
    }
    if (to.meta.requiresGuest) {
        if (Store.state.authenticated || Passport.getToken()) {
            return next({'name': 'home'})
        }
    }
    return next()
})

export default router
