import axios, { AxiosInstance } from 'axios'

export default class Interceptors {
  service: AxiosInstance

  constructor() {
    this.service = axios.create({
      baseURL: '/api', // api的base_url
      timeout: 60000, // 请求超时时间
      headers: { 'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*' },
    })
    this.setInterceptors()
  }

  // 拦截
  setInterceptors() {
    // 请求拦截
    this.service.interceptors.request.use(
      (config) => config,
      (error) => {
        // 请求错误处理
      },
    )

    // 响应拦截
    this.service.interceptors.response.use(
      (response) => response,
      (error) => {
        // 响应失败处理
      },
    )
  }

  // 获取axios
  getAxios() {
    return this.service
  }
}
