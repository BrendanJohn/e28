<template>
    <div>
        <h2>Add a Recipe</h2>

        <label for='name'>Name</label>
        <input type='text' v-model='recipe.name' id='name' />

        <label for='slug'>URL Identifier:</label>
        <input type='text' v-model='recipe.slug' id='slug' />

        <label for='price'>Price:</label>
        <input type='text' v-model='recipe.price' id='price' />

        <label for='available'>Quantity available:</label>
        <input type='text' v-model='recipe.available' id='available' />

        <label for='weight'>Alcoho by Volume (abv):</label>
        <input type='text' v-model='recipe.abv' id='abv' />

        <label for='weight'>Brewer:</label>
        <input type='text' v-model='recipe.brewer' id='brewer' />

        <label for='perishable'>Style</label>
        <input type='text' v-model='recipe.style' id='style' />

        <label for='description'>Description</label>
        <textarea v-model='recipe.description' id='description'></textarea>

        <input type='submit' value='Add' @click.prevent='addrecipe' />

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
                price: '',
                available: '',
                abv: '',
                style: '',
                brewer: '',
                description: '',
                added: false
            }
        };
    },
    methods: {
        addrecipe: function () {
            app.api.add('recipes', this.recipe).then(id => {
                console.log('recipe was added with the id: ' + id);
                this.added = true;
                setTimeout(() => (this.added = false), 3000);
                this.recipe = {
                name: '',
                slug: '',
                price: '',
                available: '',
                abv: '',
                style: '',
                brewer: '',
                description: '',
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