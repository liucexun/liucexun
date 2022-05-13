<template>
  <el-dialog
    :title="isPreview? '订单查看' : '订单编辑'"
    v-model="dialogVisible"
    :before-close="quxiao"
  >
    <el-form label-width="80px" :disabled="isPreview">
      <el-form-item label="订单号">
        <el-input v-model="tableData.orderNo"></el-input>
      </el-form-item>
      <el-form-item label="下单时间">
        <el-input v-model="tableData.orderTime"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="tableData.phone"></el-input>
      </el-form-item>
      <el-form-item label="收货人">
        <el-input v-model="tableData.consignee"></el-input>
      </el-form-item>
      <el-form-item label="送货地址">
        <el-input v-model="tableData.deliverAddress"></el-input>
      </el-form-item>
      <el-form-item label="送达时间">
        <el-input v-model="tableData.deliveryTime"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="tableData."></el-input>
      </el-form-item>
      <el-form-item label="订单金额">
        <el-input v-model="tableData.orderAmount"></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-input v-model="tableData.orderState"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span v-if="isPreview">
        <el-button type="primary" @click="quxiao">确定</el-button>
      </span>
      <span class="dialog-footer" v-else>
        <el-button type="info" @click="quxiao">取消修改</el-button>
        <el-button type="primary" @click="confEdit">确定修改</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {
  tableData,
  dialogVisible,
  isPreview,
  confEdit,
  quxiao,
} from "../OrderHooks/orderHoks";
</script>

<style lang="less" scoped></style>
