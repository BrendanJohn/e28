<template>
    <div>
        <h2>Categories</h2>
        <ul class='cleanList'>
            <li v-for='(category, id) in allCategories' :key='id'>{{ category }}</li>
        </ul>
    </div>
</template>

<script>
import * as app from '@/common/app.js'
export default {
    name: '',
    props: [],
    data: function() {
        return {
            recipes: [],
            allCategories: ''
        };
    },
    watch: {
        recipes: function() {
            let categories = Object.values(this.recipes).map(recipes => recipes.categories);
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            this.allCategories = [...new Set(mergedCategories)].sort();
        }
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