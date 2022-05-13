<template>
   <el-form label-width="80px" :inline="true">
       <el-form-item label="订单号">
           <el-input placeholder="订单号" v-model="orderInfo.orderNo"></el-input>
       </el-form-item>
       
       <el-form-item label="收货人">
           <el-input placeholder="收货人" v-model="orderInfo.consignee"></el-input>
       </el-form-item>

       <el-form-item label="手机号">
           <el-input placeholder="手机号" v-model="orderInfo.phone"></el-input>
       </el-form-item>

       <el-form-item label="订单状态">
           <el-select placeholder="请选择" v-model="orderInfo.orderState">
               <el-option value="已受理"></el-option>
               <el-option value="派送中"></el-option>
               <el-option value="已完成"></el-option>
           </el-select>
       </el-form-item>

       <el-form-item label="选择时间">
           <el-date-picker
            v-model="orderInfo.date"
            type="datetimerange"
            range-separator="至"
            start-placeholder="下单时间"
            end-placeholder="送达时间"
            value-format="YYYY-MM-DD HH:mm:ss"
            />
       </el-form-item>

       <el-form-item>
           <el-button type="primary" @click="doSearch">查询</el-button>
       </el-form-item>

   </el-form>
</template>

<script setup>
import {orderInfo,doSearch} from '../OrderHooks/orderHoks'
</script>

<style lang="less" scoped>

</style>