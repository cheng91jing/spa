<template>
    <form @submit.prevent="login">
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
        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-3">
                <button type="submit" class="btn btn-primary">
                    登陆
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import PassportToken from '../../helpers/passport'
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login () {
                let formData = {
                    email: this.email,
                    password: this.password
                }
                axios.post('/api/login', formData).then(response => {
                    // console.log(response.data)
                    PassportToken.setToken(response.data.token)
                    // this.$router.push({name: 'confirm'})
                }).catch(error => {
                    console.log(error.response.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
