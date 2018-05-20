<template>
    <form @submit.prevent="register">
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">用户名</label>

            <div class="col-md-6">
                <input v-model="name" id="name" type="text" class="form-control" name="name" value="" required
                       autofocus>
            </div>
        </div>

        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">邮箱地址</label>

            <div class="col-md-6">
                <input v-model="email" id="email" type="email" class="form-control" name="email" value="" required>
            </div>
        </div>

        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

            <div class="col-md-6">
                <input v-model="password" id="password" type="password" class="form-control" name="password" required>

            </div>
        </div>

        <div class="form-group row">
            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">确认密码</label>

            <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    注册
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        methods: {
            register: function () {
                let formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                axios.post('/api/register', formData)
                    .then(response => {
                        this.$router.push({name: 'confirm'})
                    })
            }
        }
    }
</script>

<style scoped>

</style>
