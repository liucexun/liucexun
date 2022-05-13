<template>
    <div>
        <input type="text" v-model="searchWord"> 
        <button @click="doSearch">查询</button>
    </div>
</template>

<script setup>
import {searchWord,doSearch} from '../hooks/hooks.js';


</script>

<style lang="less" scoped>

</style>