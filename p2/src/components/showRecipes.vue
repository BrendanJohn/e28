<template>
    <div id='recipes'>
        <h2>Recipes</h2>
        <show-recipe
            v-for='recipe in recipes'
            :key='recipe.id'
            :recipe='recipe'
        ></show-recipe>
    </div>
</template>