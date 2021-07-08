var vueInstance = new Vue({
    el: '#app', // muốn quản lý phần tử có id là app
    data: { // Khai báo dữ liệu
        title: 'Dien thoai Samsung'
    }, 
    methods: {
        say: function(text) {
            return 'Hello ' + text;
        }
    }
});

// Hệ thống phản ứng. Reactivity : Khi thay đổi dữ liệu thì ngay lập tức sẽ thay đổi trong DOM
console.log(vueInstance);

setTimeout(() => {
    vueInstance.title = 'Dien thoai Oppo';
}, 3000);