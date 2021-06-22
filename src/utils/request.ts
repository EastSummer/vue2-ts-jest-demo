import axios from 'axios'

export const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 60000, // 请求超时时间
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*' }
})