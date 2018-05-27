<template>
    <div class="card card-default">
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    用户名
                    <br>
                    <h4>{{ user.name }}</h4>
                </li>
                <li class="list-group-item">
                    邮箱
                    <br>
                    <h4>{{ user.email }}</h4>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        created(){
            this.$store.dispatch('setAuthUser')
        },
        computed:{
            ...mapState({
                user: state => state.AuthUser
            })
        }
    }
</script>
