<template>
    <div>
        <top-menu></top-menu>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu'
    import Passport from './../helpers/passport'
    export default {
        created(){
            if(Passport.getToken()){
                this.$store.dispatch('setAuthUser')
            }
        },
        components :{
            TopMenu
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
