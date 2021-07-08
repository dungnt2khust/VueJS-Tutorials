<template>
    <header>
        <h1>{{ title }} Lorem</h1>
        <button v-on:click="changeTitleHeader"> Thay đổi title từ Header</button>
    </header>
</template>

<script>
export default {
    name: 'comp-header',
    props: { 
        title: String
    },
    data() {
        return {
        }
    },
    methods: { 
        changeTitleHeader(e) {
            /**
             * Không đƯợc phép thay đỔi trực tiếp props từ component cha
             * -> truyền thông điệp cho component cha 
             * -> component cha lắng nghe thông điệp và xử lý 
             */
            const data =  {
                title: 'new title'
            };
            this.$emit('changeTitle', data);
        }
    }
}
</script>

<style>

</style>
