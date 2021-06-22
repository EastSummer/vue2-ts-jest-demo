import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { config } from 'vue/types/umd'

class httpRequest {
  private baseURL: string
  constructor() {
    this.baseURL = '/api'
  }
  
  getRequestConfig() {
    const config = {
      baseURL: this.baseURL, // api的base_url
      timeout: 60000, // 请求超时时间
      headers: { 'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*' },
      method: 'post',
    }
  }

  setInterceptors(instance: AxiosInstance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 发起请求前处理

        return config
      },
      error => {
        // 请求错误处理
      },
    )

    // 响应拦截
    instance.interceptors.response.use(
      response => {
        // 响应数据处理
        return response
      },
      error => {
        // 响应失败处理
      },
    )
  }

  request(options: AxiosRequestConfig) {
    const service = axios.create()
    options = Object.assign(this.getRequestConfig(), options)
    this.setInterceptors(service)
    return service(options)
  }
}

// export const service = axios.create({
//   baseURL: '/api', // api 的 base_url
//   timeout: 60000, // 请求超时时间
//   withCredentials: true,
//   headers: { 'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*' }
// })

// // axios请求拦截器
// service.interceptors.request.use(
//   config => {
//     // 发起请求前处理

//     return config
//   },
//   error => {
//     // 请求错误处理
//   },
// )

// // axios响应拦截器
// service.interceptors.response.use(
//   response => {
//     // 响应数据处理
//     return response
//   },
//   error => {
//     // 响应错误处理
//   },
// )