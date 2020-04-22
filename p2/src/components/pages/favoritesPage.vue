<template>
    <div id='recipes'>
        <h2>My Favorite Recipes</h2>
        <show-recipe
            v-for='recipe in recipes'
            :key='recipe.id'
            :recipe='recipe'
        ></show-recipe>
    </div>
</template>

<script>
import ShowRecipe from '@/components/showRecipe.vue'
import * as app from '@/common/app.js'
export default {
    name: '',
    components: {
        'show-recipe': ShowRecipe
    },
    props: [],
    data: function() {
        return {
            recipes: []
        };
    },
    mounted: function() {
        app.api.find('recipes', 'slug', localStorage.favoriteRecipes)
            .then(response =>  {
                this.recipes.push(response);
            });
   }
}
</script>

<style scoped>
</style>