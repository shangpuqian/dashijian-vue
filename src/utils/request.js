// 基于 axios 封装的请求模块
import axios from 'axios'

// 创建一个 axios 实例
const request = axios.create({
  baseURL: 'http://ajax.frontend.itheima.net/', // 请求的基础地址
  timeout: 3000 // 请求超过3秒 报错
})

export default request
