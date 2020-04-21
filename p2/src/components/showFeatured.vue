<template>
    <div id='featured'>
        <h2>This Weeks Featured Beverages</h2>
        <ul class='cleanList'>
            <li v-for='beverage in featuredBeverages' :key='beverage.id'>{{ beverage.name }}</li>
        </ul>
    </div>
</template>

<script>
import { beverages } from '@/products.js';
export default {
    name: '',
    props: ['category'],
    data: function() {
        return {
            beverages: beverages
        };
    },
    computed: {
        featuredBeverages: function() {
            function isMatch(beverage) {
                return beverage.categories.includes(this);
            }
            return this.beverages.filter(isMatch, this.category);
        }
    }
}
</script>

<style scoped>
</style>