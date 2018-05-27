<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-3">
        <div class="container">
            <router-link class="navbar-brand mb-0 h1" to="/">aa</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                </ul>
                <div class="navbar-nav ml-auto" >
                    <router-link to="/login" v-if="!user.authenticated" class="nav-item nav-link">登陆</router-link>
                    <router-link to="/register" v-if="!user.authenticated" class="nav-item nav-link">注册</router-link>
                    <router-link to="/profile" v-if="user.authenticated" class="nav-item nav-link">个人中心</router-link>
                    <a href="#" @click.prevent="logout" v-if="user.authenticated" class="nav-item nav-link">退出登陆</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed:{
            ...mapState({
                user: state => state.AuthUser
            })
        },
        methods:{
            logout(){
                this.$store.dispatch('logoutRequest').then(response => {
                    this.$router.push({name: 'home'})
                }).catch(error => {
                    console.log(error.response)
                })
            }
        }
    }
</script>
