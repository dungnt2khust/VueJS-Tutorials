var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 20000,
        sale: 0.2,
        selectedProduct: 2,
        cartNumber: 0,
        listProductDetail: [
            {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh'
            },
            {
                image: './images/black.jpg',
                quantity: 2,
                textColor: 'Màu Đen'
            },
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ'
            }
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
        ],
        description: `<li>Thoát mồ hôi tốt</li>
                    <li>Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát</li>
                    <li>Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc</li>`
    },
    methods: {
        handleClickColor(event, index) {
            this.selectedProduct = index;
        },
        classActive(event, index) {
            return {
                active: this.selectedProduct == index
            }
        },
        handleAddToCart(e) {
            if (this.cartNumber + 1 > this.getProduct.quantity) {
                alert('So luong khong du');
            } else {
                this.cartNumber = this.cartNumber + 1;
            };
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
             
            return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'VND'}).format(number);
        },

        formatFinalPrice() {
            var number = this.price -this.sale * this.price;
            
            return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'VND'}).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }, 

        
    }
});
