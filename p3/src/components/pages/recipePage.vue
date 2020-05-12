<template>
    <div id='recipe-page' v-if='recipe'>
        <h1>{{ recipe.name }}</h1>
        <img
            class='recipe-thumb'
            :alt='"recipe image of  " + recipe.name'
            :src='imageSrc' />
        <p class='description'>{{ recipe.description }}</p>
        <p class='ingredientOne'>{{ recipe.ingredientOne }}</p>
        <p class='ingredientTwo'>{{ recipe.ingredientTwo }}</p>
        <p class='ingredientThree'>{{ recipe.ingredientThree }}</p>
        <p class='ingredientFour'>{{ recipe.ingredientFour }}</p>
        <p class='directions'>{{ recipe.directions }}</p>
        <p class='output'>Output: {{ recipe.output }} liters</p>
        <p class='brewtime'>Total brew time: {{ recipe.totalBrewTime }}</p>
        <p><button @click.prevent="addFavoriteRecipe">Save to favorites</button></p>
        <button @click='addToCart(slug)' data-test='add-to-cart-button'>Add to cart</button>
                <transition name='fade'>
            <div
                data-test='add-to-cart-confirmation'
                class='alert'
                v-if='addAlert'
            >Your cart has been updated!</div>
        </transition>
        <transition name='fade'>
            <div class='alert' v-if='added'>Your recipe was added!</div>
        </transition>
        <router-link :to='{name: "recipes"}'>&larr; Return to all recipes</router-link>
    </div>
</template>

<script>
import * as app from '@/common/app.js'

export default {
    name: '',
    props: ['slug'],
    data: function() {
        return {
            addAlert: false,
            favoriteRecipes: [],
            added: ''
        };
    },
    computed: {
        recipe() {
            return this.$store.getters.getRecipeBySlug(this.slug);
        },
        imageSrc: function() {
            try {
                return require('@/assets/images/recipes/' +
                    this.recipe.slug +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg');
            }
        }
    },
    methods: {
        addFavoriteRecipe: function() {
            this.favoriteRecipes.push(this.recipe.slug);
            localStorage.setItem('favoriteRecipes', this.favoriteRecipes);
            this.checkIfAdded();
        },
        checkIfAdded: function () {
            if (localStorage.getItem('favoriteRecipes').includes(this.recipe.slug)) {
                this.added = true;
            }
        },
        addToCart: function(slug) {
            let cart = new app.Cart();
            cart.add(slug);
            this.$store.commit('updateCartCount', 1);
            this.addAlert = true;
            setTimeout(() => (this.addAlert = false), 3000);
        }
        
    }
};
</script>

<style lang='scss' scoped>
@import './scss/variables.scss';
img {
    width: 200px;
    border: 1px solid $black;
    margin-bottom: 10px;
}
.description {
    font-size: 2rem;
    width: 75%;
    margin: 10px auto;
}
.price {
    font-size: 3rem;
    margin: 10px auto;
}
button {
    display: block;
    margin: 10px auto;
    font-size: 2rem;
}
</style>