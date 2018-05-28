<template>
    <div>
        <top-menu></top-menu>
        <Notification></Notification>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu'
    import Notification from './common/Notification'
    import Passport from './../helpers/passport'
    export default {
        created(){
            if(Passport.getToken()){
                this.$store.dispatch('setAuthUser').then(response => {
                    if(this.$route.meta.requiresGuest && this.$store.state.AuthUser.authenticated){
                        this.$router.push({name: 'home'});
                    }
                })
            }
        },
        components :{
            TopMenu,
            Notification
        }
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .6s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
