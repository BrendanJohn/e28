<template>
    <div id='featured'>
        <h2>Featured Beverages</h2>
        <ul class='cleanList'>
            <li v-for='beverage in featuredBeverages' :key='beverage.id'>{{ beverage.name }}</li>
        </ul>
    </div>
</template>

<script>
import { beverage } from '@/products.js';
export default {
    name: '',
    props: ['category'],
    data: function() {
        return {
            beverage: beverage
        };
    },
    computed: {
        featuredBeverages: function() {
            function isMatch(beverage) {
                return beverage.categories.includes(this);
            }
            return this.beverage.filter(isMatch, this.category);
        }
    }
}
</script>

<style scoped>
</style>