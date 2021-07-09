<template>
    <div 
        class="wrapper-popup"
        v-bind:class="getClassPopup"
        >
        <div class="rule">
            <h3>Luật chơi</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolorum voluptates quos 
                placeat debitis incidunt natus enim, 
                perspiciatis et optio? Voluptates nesciunt 
                rem culpa eveniet sequi, in pariatur esse 
                commodi ipsa.
            </p>
            <button 
                v-on:click="confirm"
                class="confirm">Đã hiểu</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'popup-rule' ,
        props: {
            isOpenPopup: {type: Boolean, default: false}
        },
        data() {
            return {}
        },
        methods: {
            confirm() {
                this.$emit('handleConfirm');
            }
        },
        computed: {
            getClassPopup:function() {
                return {
                    'open-popup': this.isOpenPopup
                }
            }
        }
    }
</script>

<style>
    .wrapper-popup { 
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        visibility: hidden;
        opacity: 0;
        transition: all .3s ease;
    }
    .wrapper-popup.open-popup{ 
        opacity: 1;
        visibility: visible;
    }
    .rule {
        width: 350px;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        transition: all 0.3s ease;
    }
    .rule h3 {
        margin-bottom: 10px;
    }
    .confirm { 
        padding: 8px 15px;
        cursor: pointer;
        margin-top: 20px;
        border: 2px solid #333;
        background-color: #fff;
        transition: all 0.3s ease;
    }
    .confirm:hover { 
        color: #fff;
        background-color:#333;
    }

    /* Kêt hợp CSS3 với VueJS để xây dựng hiệu ứng Zoom in - Zoom out */
    .open-popup .rule {
        transform: translate(-50%, -50%) scale(1.2);
    }
</style>