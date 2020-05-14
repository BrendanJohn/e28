<template>
    <div>
        <div class="header-container">
            <h1><span class="font-weight-bold">Brendan's Ale House</span> is your one-stop-shop for craft beer recipes.</h1>
        </div>
        <p>In celebration of Saint Patrick's Day, please enjoy this weeks featured recipes which are stout-styled beers.</p>
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