<template>
    <h1>ref的使用</h1>
    <p>{{stuName}}</p>
</template>

<script>
/* 
    1.引入ref方法
    2.定义的所有数据必须return出去才能使用
*/
import { ref } from "vue"     //首先引入ref方法
export default {
    setup () {
        const stuName =ref('我叫张三')

        // 所有数据和方法都得return出去
        return {
            stuName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>