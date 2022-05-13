import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  // 首页
  {
    path:'/',
    component:()=>import('@/views/Layout/Layout'),
    redirect:'/home',
    children:[
      {
        path:'/home',
        component:()=>import('@/views/Home/Home'),
      }
    ]
  },
    // 订单页
    {
      path:'/order',
      component:()=>import('@/views/Layout/Layout'),
      redirect:'/order',
      children:[
        {
          path:'/order',
          component:()=>import('@/views/Order/Order'),
        }
      ]
    },
        // 商品管理
        {
          path:'/goods',
          component:()=>import('@/views/Layout/Layout'),
          redirect:'/goods/goods-list',
          children:[
            {
              path:'/goods-list',
              component:()=>import('@/views/Goods/GoodsList/GoodsList'),
            },
            {
              path:'/goods-add',
              component:()=>import('@/views/Goods/GoodsAdd/GoodsAdd'),
            },
            {
              path:'/goods-type',
              component:()=>import('@/views/Goods/GoodsType/GoodsType'),
            },
          ]
        },
      // 店铺管理页
      {
        path:'/shop',
        component:()=>import('@/views/Layout/Layout'),
        redirect:'/shop',
        children:[
          {
            path:'/shop',
            component:()=>import('@/views/Shop/Shop'),
          }
        ]
      },

        // 账号管理
        {
          path:'/account',
          component:()=>import('@/views/Layout/Layout'),
          redirect:'/account/account-list',
          children:[
            {
              path:'/account-list',
              component:()=>import('@/views/Account/AccountList/AccountList'),
            },
            {
              path:'/account-add',
              component:()=>import('@/views/Account/AccountAdd/AccountAdd'),
            },
            {
              path:'/account-edit',
              component:()=>import('@/views/Account/AccountEdit/AccountEdit'),
            },
          ]
        },
        // 销售统计
        {
          path:'/statistics',
          component:()=>import('@/views/Layout/Layout'),
          redirect:'/statistics/statistics-goods',
          children:[
            {
              path:'/statistics-goods',
              component:()=>import('../views/Statistics/StatisticsGoods'),
            },
            {
              path:'/statistics-order',
              component:()=>import('../views/Statistics/StatisticsOrder'),
            },
          ]
        },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
