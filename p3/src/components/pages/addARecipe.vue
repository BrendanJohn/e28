<template>
    <div>
        <h2>Add a Recipe</h2>

        <label for='name'>Name</label>
        <input type='text' v-model='recipe.name' id='name' />

        <label for='slug'>URL Identifier:</label>
        <input type='text' v-model='recipe.slug' id='slug' />

        <label for='description'>Description:</label>
        <textarea  v-model='recipe.description' id='description'></textarea>

        <label for='ingredientOne'>Ingrediant One:</label>
        <input type='text' v-model='recipe.ingredientOne' id='ingredientOne' />

        <label for='ingredientTwo'>Ingrediant Two:</label>
        <input type='text' v-model='recipe.ingredientTwo' id='ingredientTwo' />

        <label for='ingredientThree'>Ingrediant Three:</label>
        <input type='text' v-model='recipe.ingredientThree' id='ingredientThree' />

        <label for='ingredientFour'>Ingrediant Four:</label>
        <input type='text' v-model='recipe.ingredientFour' id='ingredientFour' />

        <label for='directions'>Directions: </label>
        <textarea v-model='recipe.directions' id='directions'></textarea>

        <label for='totalBrewTime'>Total Brew Time:</label>
        <input type='text' v-model='recipe.totalBrewTime' id='totalBrewTime' />

        <label for='output'>Output (in liters):</label>
        <input type='number' v-model='recipe.output' id='output' />
        <br />
        <input type='submit' value='Add' @click.prevent='addRecipe' />

        <transition name='fade'>
            <div class='alert' v-if='added'>Your recipe was added!</div>
        </transition>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
export default {
    name: '',
    data: function() {
        return {
            added: false,
            recipe: {
                name: '',
                slug: '',
                description: '',
                ingredientOne: '',
                ingredientTwo: '',
                ingredientThree: '',
                ingredientFour: '',
                directions: '',
                totalBrewTime: '',
                output: '',
                favorite: false,
                added: false
            }
        };
    },
    methods: {
        addRecipe: function () {
            app.api.add('recipes', this.recipe).then(id => {
                this.added = true;
                setTimeout(() => (this.added = false), 3000);
                this.recipe = {
                name: '',
                slug: '',
                description: '',
                ingredientOne: '',
                ingredientTwo: '',
                ingredientThree: '',
                ingredientFour: '',
                directions: '',
                totalBrewTime: '',
                output: '',
                favorite: false,
                added: false
                }
            })
        }
    }
};
</script>

<style scoped>
input {
    font-size: 15pt;
}
textarea,
input[type='text'] {
    width: 50%;
}
textarea {
    height: 75px;
    display: block;
    margin: auto;
}
label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}
input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>