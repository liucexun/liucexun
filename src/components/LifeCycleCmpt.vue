<template>
    <div></div>
</template>

<script>
/* 
    1.所有生命周期都需要引入对应方法
        - 方法名为：on+声明周期名(小驼峰命名)
        - 声明周期方法接收一个回调函数
        - 由于setup在所有声明周期之前调用，所有setup本身就可以取代create阶段声明周期
*/
import { onMounted } from "vue"
export default {
    setup () {  
        // onMounted方法接收一个回调函数
        onMounted(()=>{
            console.log('mounted生命周期触发了');
        })
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>