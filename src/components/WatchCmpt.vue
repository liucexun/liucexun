<template>
    <h1>watch监听数据用法</h1>
    <p>{{txts}}</p>

    <button @click="changeTxt">点击修改txts</button>
</template>

<script>
/* 
    watch监听语法；
        - 一样单独引入 watch方法
        - watch接收两个参数
            - 第一个参数是：被监听的变量
            - 第二个参数是：回调函数
                - 回调第一个参数是：newVal
                - 回调第二个参数是：oldVal
*/
import{ref,watch} from 'vue'
export default {
    setup () {
        // 定义一个变量，都需要用到ref来定义
        const txts=ref('你好，张麻子！')
        // 方法定义，修改txts的值
        function changeTxt(){
            txts.value='小李子，你好吗？！'
        }
        // watch监听，监听txts的值的变化(接收俩参数，一个是被监听的变量，一个是回调函数(回调参数里有俩参数（newVal，oldVal）))
        watch(txts,((newVal,oldVal)=>{
            console.log('修改后的值：'+newVal);
            console.log('修改前的值：'+oldVal);
        }))
        // 所有 要使用的数据和方法都需要return出去
        return {
            txts,
            changeTxt,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>