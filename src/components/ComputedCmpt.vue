<template>
    <h1>computed的使用</h1>
    <p>{{fistName}}</p>
    <p>{{fullName}}</p>
</template>

<script>
/* 
    computed 的使用方式：
        - 单独和ref一样 引入computed方法
        - computed方法接收一个回调函数
        - 回调中使用ref数据.value来计算衍生新的数据
*/
import {ref,computed} from 'vue'   //首先引入ref和computed方法
export default {
    setup () {
        // 在setup中定义一个尼古拉斯
        const fistName=ref('尼古拉斯');
        // 再使用computed计算属性来衍生新的数据并返回出去，
        const fullName=computed(()=>{
            return `${fistName.value} ·赵四儿`
        })

        // 最后返回需要使用的数据和方法 
        return {
            fistName,
            fullName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>