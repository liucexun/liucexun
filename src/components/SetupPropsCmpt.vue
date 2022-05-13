<template>
    <h1>setup中的defineProps的使用</h1>
    <p>我的名字是：{{props.stuName}}</p>
    <p>我的年龄是：{{props.stuAge}}</p>
</template>

<script setup>
import { defineProps } from 'vue';

const props=defineProps({
    stuName:String,
    stuAge:Number,
})

</script>

<style lang="scss" scoped>

</style>