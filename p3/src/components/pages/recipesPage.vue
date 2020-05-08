<template>
    <div id='recipes'>
        <h2>All Recipes</h2>
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
        app.api.all('recipes')
            .then(response =>  {
                this.recipes = response;
            });
   }
}
</script>

<style scoped>
</style>