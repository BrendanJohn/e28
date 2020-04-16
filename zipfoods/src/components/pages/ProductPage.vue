<template>
    <div id='product-page' v-if='product'>
        <h1>{{ product.name }}</h1>
        <img
            class='product-thumb'
            :alt='"Product image of  " + product.name'
            :src='imageSrc' />
        <p class='description'>{{ product.description }}</p>
        <div class='price'>${{ product.price }}</div>

        <router-link :to='{name: "products"}'>&larr; Return to all products</router-link>
    </div>
</template>

<script>
import * as app from '@/common/app.js'

export default {
    name: '',
    props: ['slug'],
    data: function() {
        return {
            //slug: this.$route.params.slug,
            product: null
        };
    },
    mounted: function () {
        app.api.find('products', 'slug', this.slug)
            .then(response =>  {
                this.product = response;
        });
    },
    computed: {
        imageSrc: function() {
            try {
                return require('@/assets/images/products/' + this.slug + '.jpg');
            }
            catch (e) {
                return require('@/assets/images/products/image-not-available.jpg'); 
            }
        },

    }
};
</script>

<style scoped>
</style>