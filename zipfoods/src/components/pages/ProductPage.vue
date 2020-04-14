<!-- src/components/ProductPage.vue -->
<template>
    <div id='product-page'>
        <h1 v-if='product'>{{ product.name }}</h1>
        <p v-if='product'>{{ product.description }}</p>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    name: 'ProductPage',
    props: ['id'],
    data: function() {
        return {
            //id: this.$route.params.id
            product: null,
        };
    },
    mounted: function() {
        axios
            .get(
                'https://my-json-server.typicode.com/susanBuck/e28-zipfoods-api/products/' + this.id
            )
            .then(response => {
                this.product = response.data;  
        });
    }
};
</script>

<style scoped>
</style>