import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

// 创建 Axios 实例
const http: AxiosInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 请求拦截器

import type { InternalAxiosRequestConfig } from 'axios'

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => Promise.reject(error)
)


// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 直接返回数据部分
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
