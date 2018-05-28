export default {
    actions: {
        updatePasswordRequest({dispatch}, formData){
            return axios.post('/api/user/password/update', formData).then( response => {
                dispatch('Notification/showNotification', {level: 'success', message: '更新密码成功'})
            }).catch(error => {
                dispatch('Notification/showNotification', {level: 'error', message: '更新密码失败'})
            })
        }
    }
}
