<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-3">
                <div class="list-group">
                    <router-link
                        :to="{name:'profile'}"
                        active-class="active"
                        exact
                        class="list-group-item list-group-item-action">个人资料</router-link>
                    <router-link
                        :to="{name:'profile.editProfile'}"
                        active-class="active"
                        exact
                        class="list-group-item list-group-item-action">修改资料</router-link>
                    <router-link
                        :to="{name:'profile.editPassword'}"
                        active-class="active"
                        exact
                        class="list-group-item list-group-item-action">修改密码</router-link>
                </div>
            </div>
            <div class="col-9">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileWrapper"
    }
</script>

<style scoped>

</style>
