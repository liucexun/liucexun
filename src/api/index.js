// 引入axios
import axios from "axios";
// 引入Qs
import Qs from "qs";


// 创建axios实例
const instance = axios.create({
    baseURL: "http://47.108.149.141:3000"
});

// 拦截器
instance.interceptors.request.use(config => {
        // 如果是post请求，需要Qs转义来使用
        if (config.method === 'post') {
            config.data = Qs.stringify(config.data,{
                // 如果数组中存在引用数据类型，需要在请求拦截器这里加上arrayFormat: 'repeat'
                arrayFormat: 'repeat'
            });
        }
    return config;
}, err => {
    return Promise.reject(err);
});

// 导出instance
export default instance;