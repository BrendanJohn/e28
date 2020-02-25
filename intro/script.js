let app =  new Vue ({
    el: '#app',
    data: {
        items: [],
        item: null,
        itemCount: 0,
        totalCount: 0,
        quantity: ''
    },
    methods: {
        submitItemAndQuantity: function() {
            this.items.push({name: this.item, count: this.quantity});
            this.totalCount = this.totalCount + this.quantity;
            this.item = '';
            this.quantity = '';
        }
    }
})