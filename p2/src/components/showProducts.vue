<!-- src/components/ShowProducts.vue -->
<template>
    <div id='products'>
        <h2>Products</h2>
        <show-product
            v-for='product in products'
            :key='product.id'
            :product='product'
        ></show-product>
    </div>
</template>