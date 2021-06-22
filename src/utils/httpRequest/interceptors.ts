import axios, { AxiosInstance } from 'axios'

export class Interceptors {
  service: AxiosInstance

  constructor() {
    this.service = axios.create({
      baseURL: '/api', // api的base_url
      timeout: 60000, // 请求超时时间
      headers: { 'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*' },
    })
  }

  // 拦截
  setInterceptors() {
    // 请求拦截
    this.service.interceptors.request.use(
      config => {
        // 发起请求前处理

        return config
      },
      error => {
        // 请求错误处理
      },
    )

    // 响应拦截
    this.service.interceptors.response.use(
      response => {
        // 响应数据处理
        return response
      },
      error => {
        // 响应失败处理
      },
    )
  }

  // 获取axios
  getAxios() {
    return this.service
  }
}