<template>
    <form @submit.prevent="updatePassword">
        <div class="form-group row">
            <label for="password" class="col-md-3 col-form-label text-md-right">密码</label>
            <div class="col-md-7">
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
        <div class="form-group row">
            <label for="password-confirm" class="col-md-3 col-form-label text-md-right">确认密码</label>
            <div class="col-md-7">
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
                    更新密码
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                password: null
            }
        },
        methods: {
            updatePassword(){
                this.$validator.validateAll().then(result => {
                    if(result){
                        const formData = {
                            password: this.password,
                        }
                        this.$store.dispatch('updatePasswordRequest', formData).then(res => {
                            //this.$router.push({name: 'profile'})
                        }).catch(error => {
                            //
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
