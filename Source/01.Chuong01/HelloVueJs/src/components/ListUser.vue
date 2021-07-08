<template>
    <div id="user">
        <user v-bind:key="user.id" v-for="user in listUser" v-bind:user="user"/>
    </div>
</template>

<script>
    import User from './User.vue'
    export default {
        name: 'list-user',
        props: { 
            listUser: { type: Array, default: []}
        },
        data() {
            return {

            }
        },
        components: { 
            User
        }
    }
</script>

<style>

</style>