<template>
    <h2>方法的定义</h2>
    <p>{{txtName}}</p>

    <button @click="changeTxt">点击修改文本的值</button>
</template>

<script>
/* 
    setup中方法的定义需要注意以下两点：
        - 直接定义function函数即可
        - 必须return才可以在setup中使用
*/

import { ref } from "vue"
export default {
    setup () {
        // 在setup中定义的所有数据必须return出去才能使用
       const txtName = ref('hello world')
        // 定义一个方法
       function changeTxt(){
           txtName.value='你好！世界'
       }
       return {
           txtName,
           changeTxt
       }
    }
}
</script>

<style lang="scss" scoped>

</style>