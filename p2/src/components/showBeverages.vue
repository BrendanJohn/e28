<template>
    <div id='beverages'>
        <h2>Beverages</h2>
        <show-beverage
            v-for='beverage in beverages'
            :key='beverage.id'
            :beverage='beverage'
        ></show-beverage>
    </div>
</template>