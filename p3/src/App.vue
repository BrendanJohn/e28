<template>
  <div id="app">
      <img alt='Mainlogo' id='logo' src='@/assets/images/alehouse-logo.jpg' />
            <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link :to='{ name: link }' exact>{{ link }}
                        <span v-if='link == "cart"'>({{cartCount}})</span>
                    </router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
  </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
    name: 'App',
    components: {},
    data: function() {
        return {
            cart: null,
            links: ['home', 'recipes', 'categories', 'add a recipe', 'cart', 'favorites']
        };
    },
    mounted: function() {
        this.cart = new app.Cart();
        this.$store.commit('setCartCount', this.cart.count());
    },
    computed: {
        cartCount: function() {
            return this.$store.state.cartCount;
        }
    }
};
</script>

<style lang='scss'>
@import './scss/aleHouse.scss';
</style>
