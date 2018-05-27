<template>
    <form>
        <div class="form-group row" >
            <label for="name" class="col-md-3 col-form-label text-md-right">用户名</label>

            <div class="col-md-7">
                <input v-model="user.name"
                       v-validate="{rules: {required: true}}"
                       :class="{'is-invalid' : errors.has('name')}"
                       data-vv-as="用户名"
                       id="name" type="text" class="form-control" name="name" value="" required>
                <span class="invalid-feedback">
                    <strong>{{ errors.first('email') }}</strong>
                </span>
            </div>
        </div>
        <div class="form-group row" >
            <label for="email" class="col-md-3 col-form-label text-md-right">邮箱地址</label>

            <div class="col-md-7">
                <input v-model="user.email"
                       v-validate="{rules: {required: true, email:true}}"
                       :class="{'is-invalid' : errors.has('email')}"
                       data-vv-as="邮箱地址"
                       id="email" type="email" class="form-control" name="email" value="" required>
                <span class="invalid-feedback">
                    <strong>{{ errors.first('email') }}</strong>
                </span>
            </div>
        </div>
        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-3">
                <button type="submit" class="btn btn-primary">
                    更新用户资料
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState({
                user: state => state.AuthUser
            })
        }
    }
</script>

<style scoped>

</style>
