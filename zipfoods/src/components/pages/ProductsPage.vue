<!-- src/components/ShowProducts.vue -->
<template>
    <div id='products'>
        <h2>Products</h2>
        <show-product
            v-for='product in products'
            :key='product.id'
            :product='product'
        ></show-product>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue'
const axios = require('axios');

export default {
    name: '',
    components: {
        'show-product': ShowProduct
    },
    props: [],
    data: function() {
        return {
            products: []
        };
    },
    mounted: function() {
    axios
        .get(
            'https://my-json-server.typicode.com/susanBuck/e28-zipfoods-api/products'
        )
        .then(response => {
            this.products = response.data;  
        });
   }
}
</script>

<style scoped>
</style>