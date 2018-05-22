<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="card">
                    <div class="card-header">登陆</div>

                    <div class="card-body">
                        <login-form></login-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginForm from './LoginForm'
    export default {
        components:{
            LoginForm
        }
    }
</script>

<style scoped>

</style>
