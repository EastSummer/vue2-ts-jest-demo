import { Interceptors } from './interceptors'
import { AxiosPromise, AxiosInstance, AxiosResponse } from 'axios'

class HttpRequest{
  axios: any
  constructor() {
    this.axios = new Interceptors().getAxios()
  }
  request(config: any): AxiosPromise | null {
    return new Promise((resolve, reject) => {
        this.axios.post(config).then((res: AxiosResponse) => {}).catch((error: any) => {})
      })
  }
}

const httpRequest = new HttpRequest()
export default httpRequest