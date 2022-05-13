<template>
    <form>
        <div>
            姓名：<input type="text" v-model="stuInfo.name">
        </div>
        <div>
            年龄：<input type="text" v-model="stuInfo.age">
        </div>
        <div>
            电话：<input type="text" v-model="stuInfo.phone">
        </div>
    </form>
    <button @click="addStu">新增学生</button>

</template>

<script setup>
import {stuInfo,addStu} from '../hooks/hooks.js'


</script>

<style lang="scss" scoped>

</style>