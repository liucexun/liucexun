<template>
    <el-table :data="orderTable" class="maxbox">
        <el-table-column prop="orderNo" label="订单号" width="100px"></el-table-column>
        <el-table-column prop="orderTime" label="下单时间" width="160px">

        </el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="consignee" label="收货人"></el-table-column>
        <el-table-column prop="deliverAddress" label="送货地址"></el-table-column>
        <el-table-column prop="deliveryTime" label="送达时间" width="160px"></el-table-column>
        <el-table-column prop="remarks" label="用户备注"></el-table-column>
        <el-table-column prop="orderAmount" label="订单金额"></el-table-column>
        <el-table-column prop="orderState" label="订单状态"></el-table-column>

        <el-table-column label="操作" width="170">
            <template #default="{ row }">
                <el-button type="primary" size="small" round @click="show(row)">查看</el-button>
                <el-button type="danger" size="small" round @click="edits(row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>

</template>

<script setup>
import { orderTable, show, edits, getOrderList } from '../OrderHooks/orderHoks'
getOrderList();

</script>
<style lang="less" scoped>
.maxbox{
    margin-bottom: 10px;
}
</style>