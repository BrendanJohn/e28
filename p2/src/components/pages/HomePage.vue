<template>
    <div>
        <p>Brendan's Ale House is your one-stop-shop for craft beer recipes.</p>
        <show-featured :category='featuredCategory'></show-featured>
    </div>
</template>

<script>
import ShowFeatured from '../../components/showFeatured.vue'
export default {
    name: '',
    components: {
        'show-featured' : ShowFeatured
    },
    data: function() {
        return {
            featuredCategory: 'hops'
        };
    }
}
</script>

<style scoped>
</style>