<template>
    <h1>reactive的使用：</h1>
    <p>{{stuDent}}</p>
    <button @click="changeAddress">点击改变地址</button>
</template>

<script>

import { reactive } from "vue"
export default {
    setup () {
        const stuDent=reactive({
            stuName:"张三",
            stuAddress:'北京市朝阳区'
        })
        console.log(stuDent);

        function changeAddress(){
            stuDent.stuName='李寻欢'
            stuDent.stuAddress="上海市浦东新区"
        }

        return {
            stuDent,
            changeAddress
        }
    }
}
</script>

<style lang="scss" scoped>

</style>