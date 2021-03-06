<template>
    <div>
        <div class="header-container">
            <h1>Add a Recipe</h1>
        </div>
        <div id='inputs'>
            <label for='name'>Name</label>
            <input 
                type='text'
                data-test='recipe-name-input'
                v-model='$v.recipe.name.$model' 
                id='name' 
                :class='{ "form-input-error": $v.recipe.name.$error}'
            />

            <div v-if='$v.recipe.name.$error'>
                <div class='form-feedback-error' v-if='!$v.recipe.name.required'>A recipe name is required</div>
            </div>

            <label for='slug'>URL Identifier:</label>
            <input 
                type='text'
                data-test='recipe-slug-input' 
                v-model='$v.recipe.slug.$model' 
                id='slug'
                :class='{ "form-input-error": $v.recipe.slug.$error}'
            />

            <small class='form-help'>Minimum 4</small>

            <div v-if='$v.recipe.slug.$error'>
                <div class='form-feedback-error' v-if='!$v.recipe.slug.required'>A URL identifer is required</div>
                <div class='form-feedback-error' v-if='!$v.recipe.slug.minLength'>A URL identifer must be at least 4 characters long</div>
                <div class='form-feedback-error' v-if='!$v.recipe.slug.doesNotExist'>The URL identifer is not available</div>
            </div>

            <label for='description'>Description:</label>

            <textarea  
                v-model='$v.recipe.description.$model' 
                id='description'
                data-test='recipe-description-textarea'
                :class='{ "form-input-error": $v.recipe.description.$error}'
            ></textarea>

           <div v-if='$v.recipe.description.$error'>
                <div class='form-feedback-error' v-if='!$v.recipe.description.required'>A description identifer is required</div>
                <div class='form-feedback-error' v-if='!$v.recipe.description.minLength'>A description must be at least 25 characters long</div>
            </div>
                        
            <small class='form-help'>Minimum 25 characters</small>

            <label for='ingredientOne'>Ingredient One:</label>
            <input 
                type='text'
                data-test='recipe-ingredientOne-input' 
                v-model='recipe.ingredientOne' 
                id='ingredientOne' 
            />

            <label for='ingredientTwo'>Ingredient Two:</label>
            <input type='text' v-model='recipe.ingredientTwo' id='ingredientTwo' />

            <label for='ingredientThree'>Ingredient Three:</label>
            <input type='text' v-model='recipe.ingredientThree' id='ingredientThree' />

            <label for='ingredientFour'>Ingredient Four:</label>
            <input type='text' v-model='recipe.ingredientFour' id='ingredientFour' />

            <label for='directions'>Directions: </label>
            <textarea v-model='recipe.directions' id='directions'></textarea>

            <label for='totalBrewTime'>Total Brew Time:</label>
            <input type='text' v-model='recipe.totalBrewTime' id='totalBrewTime' />

            <label for='output'>Output (in liters):</label>
            <input type='number' v-model='recipe.output' id='output' />

            <label> Categories (choose all that apply)</label>
            <div class="form-check form-check-inline">
                <label  class="form-check-label" for='paleAle'> Pale Ale </label>
                <input class="form-check-input" type='checkbox' id='paleAle' value='paleAle' v-model='recipe.categories'>
            </div>
            <div class="form-check form-check-inline">
                <label  class="form-check-label" for='ipa'> IPA </label>
                <input class="form-check-input" type="checkbox" id='ipa' value='ipa' v-model='recipe.categories'>
            </div>
            <div class="form-check form-check-inline">
                <label  class="form-check-label" for='stout'> Stout </label>
                <input class="form-check-input" type="checkbox" id='stout' value='stout' v-model='recipe.categories'> 
            </div>
        </div>
        <button data-test='add-recipe-button' @click.prevent='addRecipe'>Add recipe</button>
        <div class='form-feedback-error' v-if='$v.$anyError'>Please correct the above errors</div>

        <transition name='fade'>
            <div
                data-test='recipe-added-confirmation'
                class='alert'
                v-if='added'
            >Your recipe {{ addedName }} was added!</div>
        </transition>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: '',
    data: function() {
        return {
            added: false,
            addedName: '',
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
                categories: []
            }
        };
    },
    validations: {
        recipe: {
            name: {
                required
            },
            slug: {
                required,
                minLength: minLength(4),
                doesNotExist(value) {
                    return !this.$store.getters.getRecipeBySlug(value);
                }
            },
            description: {
                required,
                minLength: minLength(25),
            }
        }
    },
    methods: {
        addRecipe: function () {
            // Invoke this touch method to force the validation system to register errors even if the user hasn't interacted with any of the fields yet.
            this.$v.$touch();
            // Only add the product if we don't have any errors
            if (this.$v.$anyError == false) {
                app.api.add('recipes', this.recipe).then(response => {
                   if (response.includes('Error')) {
                        alert(response);
                    } else {
                        //resets validation
                        this.$v.$reset();
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
                            categories: []
                        }
                    }

                })
            }
        }  
    }
};
</script>

<style scoped>
#inputs {
    text-align: left;
}
</style>