<template>
    <div class="user">
        <h2> {{ user.email }}</h2> 
        <button 
            class="delete"
            v-on:click="handleDelete"
            >Delete</button>
    </div>
</template>

<script>
    export default {
       name: 'user' ,
       props: {
           user: { type: Object, default: null}
       },
       data() {
           return {
           }
       },
       methods: { 
           handleDelete() {
               const data = {id: this.user.id};
               this.$emit('deleteUser', data);
           }
       }
    }
</script>

<style>
    .user { 
        position: relative;
        border: 1px solid #000;
    }

    .user .delete {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>