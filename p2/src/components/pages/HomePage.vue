<template>
    <div>
        <p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>

        <show-featured :category='featuredCategory'></show-featured>
    </div>
</template>

<script>
import ShowProduct from '../../components/showProduct.vue'
export default {
    name: '',
    components: {
        'show-featured' : ShowProduct
    },
    data: function() {
        return {
            featuredCategory: 'snacks'
        };
    }
}
</script>

<style scoped>
</style>