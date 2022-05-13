import { reactive, ref } from 'vue';
import { orderList, edit } from '@/api/order/order.api';   //接口文件
import moment from "moment";    //时间格式化moment


// 表单相关的数据 查询业务
export const orderInfo = reactive({
    orderNo: '',
    consignee: '',
    phone: '',
    orderState: '',
    date: '',
})
// 查询按钮
export function doSearch() {
    // currentPage = ref(1);
    // pageSize = ref(5);
    // getOrderList()
    handleCurrentChange()
    console.log(orderInfo);
}

// 表格相关的数据
export let orderTable = ref([]);  //表格假数据
// 获取表格数据，渲染表格列表
export function getOrderList() {
    let data = reactive(Object.assign({}, { currentPage, pageSize }, orderInfo))
    orderList(data).then(res => {
        console.log(res);
        orderTable.value = res.data.data;  //获取到的数据 添加到表格
        total.value = res.data.total;      //获取到的总条数 添加到表格
    })
}
// export function getOrderList(str = { currentPage: currentPage.value, pageSize: pageSize.value }) {
//     orderList(str).then(res => {
//         orderTable.value = res.data.data;
//         total.value = res.data.total;
//     })
// }



// 分页器相关数据
export let currentPage = ref(1);
export let pageSize = ref(5);
export const total = ref(0);
// 改变每页显示条数的时候触发，重新调用列表接口 获取数据
export function handleSizeChange(newPageSize) {
    pageSize.value = newPageSize;
    getOrderList();
}
// 改变当前页码的时候触发，重新调用列表接口 获取数据
export function handleCurrentChange(newCurrentPage) {
    currentPage.value = newCurrentPage;
    getOrderList();
}




// 查看订单按钮
export function show(row) {
    console.log(row)
    tableData.value = row;  //把当前行数据添加到表格
    dialogVisible.value = true; //显示弹框
    isPreview.value = true;  //三目运算 preview为true的时候   显示查看按钮
}
// 编辑订单按钮
export function edits(row) {
    console.log(row)
    tableData.value = row;      //一样 把当前行数据添加到表格
    dialogVisible.value = true; //显示弹框
    isPreview.value = false;    //三目运算 preview为false的时候 隐藏查看按钮 显示取消编辑和保存编辑按钮
}





// 时间格式化函数
export function times() {
    tableData.value.orderTime = moment(tableData.value.orderTime).format(
        "yyyy-MM-DD HH:mm:ss"
    );
    tableData.value.deliveryTime = moment(tableData.value.deliveryTime).format(
        "yyyy-MM-DD HH:mm:ss"
    );
}


//dailog弹窗
export const tableData = ref({});       //定义一个空的表格弹窗 数据
export const dialogVisible = ref(false);    //定义弹窗，默认为false不显示
export const isPreview = ref(true);        //定义三目运算，默认为true显示查看按钮  false显示取消编辑和保存编辑按钮

//确定修改 接口请求之后 关闭对话框
export function confEdit() {  //确定修改按钮
    // 调用时间转换函数
    times();
    // 修改订单接口 传入整个tableData.value数据
    edit(tableData.value).then((res) => {
        console.log(res);
    });
    // 关闭弹窗
    dialogVisible.value = false;
}


// 取消修改 关闭弹窗
export function quxiao() {
    dialogVisible.value = false;
}