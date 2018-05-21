<template>
    <form @submit.prevent="register">
        <div class="form-group row" >
            <label for="name" class="col-md-3 col-form-label text-md-right">用户名</label>

            <div class="col-md-7" >
                <input v-model="name"
                       :class="{'is-invalid' : errors.has('name')}"
                       v-validate="{rules: {required: true, min:4}}"
                       data-vv-as="用户名"
                       id="name" type="text" class="form-control" name="name" value="" required autofocus>
                <span class="invalid-feedback">
                    <strong>{{ errors.first('name') }}</strong>
                </span>
            </div>
        </div>

        <div class="form-group row" >
            <label for="email" class="col-md-3 col-form-label text-md-right">邮箱地址</label>

            <div class="col-md-7">
                <input v-model="email"
                       v-validate="{rules: {required: true, email:true}}"
                       :class="{'is-invalid' : errors.has('email')}"
                       data-vv-as="邮箱地址"
                       id="email" type="email" class="form-control" name="email" value="" required>
                <span class="invalid-feedback">
                    <strong>{{ errors.first('email') }}</strong>
                </span>
            </div>
        </div>

        <div class="form-group row" >
            <label for="password" class="col-md-3 col-form-label text-md-right">密码</label>

            <div class="col-md-7" >
                <input v-model="password"
                       :class="{'is-invalid' : errors.has('password')}"
                       v-validate="{rules: {required: true, min:6}}"
                       data-vv-as="密码"
                       id="password" type="password" class="form-control" name="password" required>
                <span class="invalid-feedback">
                    <strong>{{ errors.first('password') }}</strong>
                </span>
            </div>
        </div>

        <div class="form-group row" >
            <label for="password-confirm" class="col-md-3 col-form-label text-md-right">确认密码</label>

            <div class="col-md-7" >
                <input id="password-confirm"
                       :class="{'is-invalid' : errors.has('password_confirmation')}"
                       v-validate="{rules: {required: true, min:6, confirmed: 'password'}}"
                       data-vv-as="确认密码"
                       type="password" class="form-control" name="password_confirmation" required>
                <span class="invalid-feedback">
                    <strong>{{ errors.first('password_confirmation') }}</strong>
                </span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-3">
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
