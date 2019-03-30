import axios from 'axios'
import router from './routers/index';
// axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'http://localhost:3000/api'

// 再重新设置好的axios作为模块导出

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前获取localStorage中的token如果有则添加，如果没有则不添加
  const token = localStorage.getItem('token')
  token ? config.headers.common['Authorization'] = "Bearer " + token : null
  return config;
}, function (error) {
  // 对请求错误
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  if(response.data.res_code === 401) {
    router.push('/login')
  }
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios 