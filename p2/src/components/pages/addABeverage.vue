<template>
    <div>
        <h2>Add a Beverage</h2>

        <label for='name'>Name</label>
        <input type='text' v-model='beverage.name' id='name' />

        <label for='slug'>URL Identifier:</label>
        <input type='text' v-model='beverage.slug' id='slug' />

        <label for='price'>Price:</label>
        <input type='text' v-model='beverage.price' id='price' />

        <label for='available'>Quantity available:</label>
        <input type='text' v-model='beverage.available' id='available' />

        <label for='weight'>Alcoho by Volume (abv):</label>
        <input type='text' v-model='beverage.abv' id='abv' />

        <label for='weight'>Brewer:</label>
        <input type='text' v-model='beverage.brewer' id='brewer' />

        <label for='perishable'>Style</label>
        <input type='text' v-model='beverage.style' id='style' />

        <label for='description'>Description</label>
        <textarea v-model='beverage.description' id='description'></textarea>

        <input type='submit' value='Add' @click.prevent='addbeverage' />

        <transition name='fade'>
            <div class='alert' v-if='added'>Your beverage was added!</div>
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
            beverage: {
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
        addbeverage: function () {
            app.api.add('beverages', this.beverage).then(id => {
                console.log('beverage was added with the id: ' + id);
                this.added = true;
                setTimeout(() => (this.added = false), 3000);
                this.beverage = {
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