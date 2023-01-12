import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { envConfig } from '@/mains'

type HttpRequest = {
  url: string,
  method?: 'get'|'post'|'put'|'delete',
  body?: any,
  params?: any
  headers?: any
}

type HttpResponse<T = any> = {
  body: T,
  code: number
}

class Service {
  private axios: AxiosInstance

  constructor () {
    this.axios = axios.create({
      baseURL: envConfig.BASE_URL
    })
  }

  async request<T> (props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, body, headers, method, params } = props
    let response: AxiosResponse

    try {
      response = await this.axios.request({
        url,
        data: body || {},
        headers: headers || {},
        method: method || 'get',
        params: params || {}
      })
    } catch (error) {
      response = (error as any).message
    }

    return {
      body: response.data,
      code: response.status
    }
  }
}

export const service = new Service()
