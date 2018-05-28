import * as types from './../mutation-type'

export default {
    namespaced: true,
    state: {
        level: 'success',  //
        message: null,
    },
    mutations:{
        [types.SHOW_NOTIFICATION](state, payload){
            state.level = payload.notification.level
            state.message = payload.notification.message
        },
        [types.HIDE_NOTIFICATION](state){
            state.level = 'success'
            state.message = null
        }
    },
    actions: {
        showNotification({commit}, notification) {
            commit({
                type: types.SHOW_NOTIFICATION,
                notification
            })
        },
        hideNotification({commit}){
            commit({
                type: types.HIDE_NOTIFICATION
            })
        }
    }
}
