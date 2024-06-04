import axios from 'axios'
import { getToken } from '@/utils/auth'
import Router from '@/router/index'
import { ElMessage } from 'element-plus'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, // url = base api url + request url
    withCredentials: true,
    timeout: 10000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
    config => {
        //console.log(config);
        let token = getToken();
        //console.log('token:'+token)
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // if the custom code is not 0, it is judged as an error.
        if (res.code !== 0) {
            ElMessage.error('请求失败:' + res.message)
            if (res.code === 10004 || res.code === 10019) {
                Router.push({ name: 'Login', query: { redirectPath: window.location.href } })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res.data
        }
    },
    error => {
        ElMessage.error('请求异常:'+error)
        return Promise.reject(error)
    }
)
export default service;