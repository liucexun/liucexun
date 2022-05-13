<template>
    <div>
        <h1>这是第一个组件</h1>

    </div>
</template>

<script>
export default {
    // setup中有两个参数
    setup (props,context) {
        console.log(props,context);

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>