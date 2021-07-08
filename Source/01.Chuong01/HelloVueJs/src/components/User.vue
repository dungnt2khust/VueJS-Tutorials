<template>
<h2> {{ user.email }}</h2> 
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
       }
    }
</script>

<style>

</style>