<template>
    <div>
        <div class="header-container">
            <h1>Categories Page</h1>
        </div>
        <div class="highlight">
            <ul class='cleanList'>
                <li 
                    data-test='category-name'
                    v-for='(category, id) in allCategories' :key='id'>{{ category }}
                </li>
            </ul>
        </div>
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