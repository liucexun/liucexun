<template>
<el-container class="maxBox">
    <el-aside width="200px" class="leftBox">
        <el-menu :router="true" class="el-menu-vertical-demo" 
                 background-color="#304156" 
                 text-color="#fff" 
                 active-text-color="#ffd04b" 
                 unique-opened 
                 collapse-transition>
            <!-- 后台首页 -->
            <el-menu-item index="/">
                <template #title>
                    <span>后台首页</span>
                </template>
            </el-menu-item>

            <!-- 订单管理 -->
            <el-menu-item index="/order">
                <template #title>
                    <span>订单管理</span>
                </template>
            </el-menu-item>

            <!-- 商品管理 -->
            <el-sub-menu index="/goods">
                <template #title>
                    <span>商品管理</span>
                </template>

                <el-menu-item index="/goods-list">
                    <template #title>
                        <span>商品列表</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/goods-add">
                    <template #title>
                        <span>商品添加</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/goods-type">
                    <template #title>
                        <span>商品分类</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>

            <!-- 店铺管理 -->
            <el-menu-item index="/shop">
                <template #title>
                    <span>店铺管理</span>
                </template>
            </el-menu-item>

            <!-- 账号管理 -->
            <el-sub-menu index="/account">
                <template #title>
                    <span>账号管理</span>
                </template>

                <el-menu-item index="/account-list">
                    <template #title>
                        <span>账号列表</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/account-add">
                    <template #title>
                        <span>添加账号</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/account-edit">
                    <template #title>
                        <span>修改密码</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>

            <!-- 销售统计 -->
            <el-sub-menu index="/statistics">
                <template #title>
                    <span>销售统计</span>
                </template>

                <el-menu-item index="/statistics-goods">
                    <template #title>
                        <span>商品统计</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/statistics-order">
                    <template #title>
                        <span>订单统计</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>

        </el-menu>
    </el-aside>

    <el-container>
        <el-header class="header">头部</el-header>

        <el-main class="mainBox">
            <router-view></router-view>
        </el-main>
    </el-container>

</el-container>
</template>

<script setup>

</script>

<style lang="less" scoped>
.maxBox {
    height: 100vh;
    .leftBox {
        background: #304156;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
}
// 去除左边菜单滚动条
::-webkit-scrollbar{  width: 0 !important };
.header{
    background: skyblue;
}
// 去除左边菜单栏的 细节boder
.el-menu{
    border:none;
}
.mainBox{
    background: rgb(239, 239, 239);
    padding: 20px;
}
</style>
