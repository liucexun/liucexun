<template>
    <table border="1" width="500">
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>电话</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in filterStus" :key="index">
                <td v-for="(value,key) in item" :key="key">{{value}}</td>
            </tr>
        </tbody>
    </table>
    <div>
    </div>
</template>

<script setup>
import { filterStus } from '../hooks/hooks.js';

</script>

<style lang="scss" scoped>

</style>