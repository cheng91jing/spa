<template>
    <div class="container">
        <div class="notification">
            <transition mode="in-out" name="fade">
                <div :class="notificationLevel"
                     v-if="message"
                     @click="hideNotification"
                     class="alert">
                    {{message}}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </transition>
        </div>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "notification",
        computed: {
            // ...mapState('Notification', {
            //     level: state => state.level,
            //     message: state => state.message
            // }),
            ...mapState('Notification', [
                'level',
                'message'
            ]),
            notificationLevel(){
                return 'alert-' + this.level
            }
        },
        methods:{
            ...mapActions('Notification', [
                'hideNotification'
            ])
        }
    }
</script>

<style scoped>

</style>
