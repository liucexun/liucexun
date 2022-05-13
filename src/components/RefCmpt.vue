<template>

    <h1>ref的使用</h1>
    <p>{{divDom}}</p>
    <div ref="divDom">这是即将被标记的divDom</div>
</template>

<script>

import { ref } from "vue"
export default {
/* 
    用ref标记的dom，
*/
    setup () {
        const divDom=ref('这是随便给的数据')

        return {
            divDom
        }
    }
}
</script>

<style lang="scss" scoped>

</style>