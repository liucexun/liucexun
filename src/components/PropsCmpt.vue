<template>
    <p>{{ studentName }}</p>
    <p>{{ studentAddress }}</p>
</template>

<script>
import {
    toRefs
} from 'vue';
export default {
    props: {
        stuName: String,
        stuAddress: String
    },

    setup(props) {
        const {
            stuName,
            stuAddress
        } = toRefs(props)

        return {
            studentName: stuName,
            studentAddress: stuAddress
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
