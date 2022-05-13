import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入element-ui(3.xPlus版本)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element3.x 中文包
import zhCn from 'element-plus/es/locale/lang/zh-cn'


// 引入公共css
import '@/assets/commCss/commCss.less'



createApp(App).use(router).use(ElementPlus,{
    locale:zhCn
}).mount('#app')
