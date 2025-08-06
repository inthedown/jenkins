//封装axios
import axios from 'axios';

//创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
});
// 动态设置 baseURL
service.interceptors.request.use(config => {
  // 读取本地存储的 IP
  const ip = localStorage.getItem('device_ip');
  if (ip) {
    config.baseURL = `http://${ip}`;
  }
  return config;
}, error => {
    //请求错误时做些什么
    console.log(error);
    return Promise.reject(error);
});
export function request(url, options = {}) {
    return service({
        url,
        method: options.method || 'get',
        data: options.data || null,
        params: options.params || null,
        headers: options.headers || {},
    })
        .then(res => res)
        .catch(err => {
            console.error('请求出错', err);
            return Promise.reject(err);
        });
}
//响应拦截器
service.interceptors.response.use(response => {
    //对响应数据做些什么
    return response.data;
}, error => {
    //响应错误时做些什么
    console.log('err' + error);
    return Promise.reject(error);
});
//导出axios实例
export default service;