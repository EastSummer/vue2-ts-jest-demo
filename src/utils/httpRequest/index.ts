import { Interceptors } from './interceptors'
import { AxiosPromise, AxiosInstance } from 'axios'

export class httpRequest{
  axios: any
  promise: AxiosPromise | null
  constructor() {
    this.axios = new Interceptors().getAxios()
    this.promise = null
  }
  sendRequest(config: any): AxiosPromise | null {
    if (!config.method) {
      this.promise = this.axios.post(config)
    } else {
      this.promise = this.axios[config.method](config)
    }
    return this.promise
  }
}