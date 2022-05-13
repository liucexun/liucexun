<template>
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 20, 25]"
      :small="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
</template>

<script setup>
import {currentPage,pageSize,total,handleSizeChange,handleCurrentChange} from '../OrderHooks/orderHoks'


</script>

<style lang="less" scoped>

</style>