<template>
    <div id='cart-page'>
        <div class="header-container">
            <h1>Your Cart</h1>
        </div>
        <div v-if='items.length == 0'>
            <p>Looks like you don't have any recipes added to your cart yet, why not visit the recipes page and find one?</p>
            <router-link :to='{name: "recipes"}'>&larr; Return to all recipes</router-link>
        </div>

        <ul class='cleanList' v-if='Object.keys(recipes).length > 0' data-test='cart-contents'>
            <li v-for='item in items' :key='item.slug'>
                <button
                    data-test='remove-from-cart-button'
                    @click='removeFromCart(item.slug, item.quantity)'
                >Remove</button>
                {{ item.quantity }} x {{ getRecipeDetails(item.slug).name }}
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
export default {
    data: function() {
        return {
            items: [],
            cart: null
        };
    },
    mounted() {
        // Making Cart instantce a data property so we can use it later in a removeFromCart method
        this.cart = new app.Cart();
        this.items = this.cart.getItems();
    },
    methods: {
        getRecipeDetails(slug) {
            for (let key of Object.keys(this.recipes)) {
                if (this.recipes[key].slug == slug) {
                    return this.recipes[key];
                }
            }
        },
        removeFromCart(slug, quantity) {
            this.cart.remove(slug);
            //app.store.cartCount = this.cart.count();
            this.$store.commit('updateCartCount', -quantity);
        }
    },
    computed: {
        recipes: function() {
            return this.$store.state.recipes;
        }
    }
};
</script>

<style lang='scss' scoped>
@import './scss/variables.scss';
button {
    background-color: $red;
    font-size: 10px;
    padding: 5px;
}
button:hover {
    background-color: darken($red, 10%);
}
</style>