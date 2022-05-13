<template>
    <h2>event事件机制</h2>

    <button @click="doBtn">点击触发自定义事件</button>
</template>

<script>
export default {
    setup (_,context) {

        function doBtn(){
            // 触发自定义事件
            context.emit('dodata','触发了自定义事件咯')
        }

        return {
            doBtn,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>