<template>
    <h1>setup中的emits使用</h1>
    <button @click="fireEvent">点击触发emits</button>
</template>

<script setup>
/* 
    setup语法糖中如何使用自定义事件
*/
import { defineEmits } from 'vue';
// 数组语法
// const emit=defineEmits(['doSth']);

// 对象语法
const emit =defineEmits({
    doSth(v){
        if(v==='张三'){
            return false;
        }else{
            return true;
        }
    }
})
function fireEvent(){
    emit('doSth','张三');
}
</script>

<style lang="scss" scoped>

</style>