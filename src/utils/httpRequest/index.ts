import { AxiosPromise, AxiosResponse } from 'axios'
import Interceptors from './interceptors'

class HttpRequest {
  axios: any

  constructor() {
    this.axios = new Interceptors().getAxios()
  }

  request(config: any): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.axios.post(config).then(
        (res: AxiosResponse) => { resolve(res) },
      ).catch((error: any) => { reject(error) })
    })
  }
}

const httpRequest = new HttpRequest()
export default httpRequest
