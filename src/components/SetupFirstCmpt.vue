<template>
    <h1>setup的语法糖：</h1>
    <p>{{ txt }}</p>
    <button @click="changeTxt">改变txt</button>
    <p>引入的子组件 ↓</p>
    <WatchCmptVue />
</template>

<script setup>
/* 
    1.setup 语法糖标志————script标签内设置setup属性
    2.setup 内定义数据和方法，语法和常规js定义方式一致
    3.setup 语法糖内，引入子组件之后，可以直接在template标签内使用，无需注册
*/
import { ref } from 'vue';
// 引入子组件  无需注册，直接使用即可
import WatchCmptVue from './WatchCmpt.vue';

const txt = ref('hello world');
function changeTxt() {
    txt.value = '你好世界';
}
</script>

<style lang="scss" scoped>
</style>