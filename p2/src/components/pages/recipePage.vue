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
            //slug: this.$route.params.slug,
            recipe: null
        };
    },
    mounted: function () {
        app.api.find('recipes', 'slug', this.slug)
            .then(response =>  {
                this.recipe = response;
        });
    },
    computed: {
        imageSrc: function() {
            try {
                return require('@/assets/images/recipes/' + this.slug + '.jpg');
            }
            catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg'); 
            }
        },

    }
};
</script>

<style scoped>
</style>