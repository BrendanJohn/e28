<template>
    <div>
        <p>Brendan's Ale House is your one-stop-shop for cool craft beers from unique brewers all over Massachussetts.</p>

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
            featuredCategory: 'snacks'
        };
    }
}
</script>

<style scoped>
</style>