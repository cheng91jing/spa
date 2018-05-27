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
                       :class="{'is-invalid' : errors.has('password') || bag.has('password:auth')}"
                       v-validate="{rules: {required: true, min:6}}"
                       data-vv-as="密码"
                       id="password" type="password" class="form-control" name="password" required>
                <span class="invalid-feedback">
                    <strong v-show="errors.has('password')" >{{ errors.first('password') }}</strong>
                    <strong v-show="mismatchError" >{{ bag.first('password:auth') }}</strong>
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
    import {ErrorBag} from 'vee-validate'

    export default {
        data() {
            return {
                email: '',
                password: '',
                bag: new ErrorBag()
            }
        },
        computed:{
            mismatchError(){
                return this.bag.has('password:auth') && !this.errors.has('password')
            }
        },
        watch: {
            password() {
                if (this.bag.has('password:auth')) {
                    this.bag.remove('password');
                }
            }
        },
        methods: {
            login () {
                this.$validator.validateAll().then(result => {
                    if(result){
                        let formData = {
                            email: this.email,
                            password: this.password
                        }
                        this.$store.dispatch('loginRequest', formData).then(response => {
                            this.$router.push({name: 'profile'})
                        }).catch(error => {
                            if(error.response.status === 421)
                                this.bag.add('password', '邮箱密码不相符', 'auth')

                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
