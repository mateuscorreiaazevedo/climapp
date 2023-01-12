import { envConfig } from '@/mains'
import { service } from '@/modules/core'

type CurrentProps = {
  lat?: number
  lon?: number
}
class HomeService {
  async getCurrentLocation ({ lat, lon }: CurrentProps) {
    const response = await service.request<{data: Weather[]}>({
      url: '',
      params: {
        lat,
        lon,
        key: envConfig.API_KEY,
        lang: 'pt'
      }
    })

    switch (response.code) {
      case 200: return response.body
      default: throw new Error('Erro no servidor. Tente novamente mais tarde')
    }
  }

  async getCity (city: string) {
    const response = await service.request<{data: Weather[]}>({
      url: '',
      params: {
        key: envConfig.API_KEY,
        lang: 'pt',
        city
      }
    })

    switch (response.code) {
      case 200: return response.body
      default: throw new Error('Erro no servidor. Tente novamente mais tarde')
    }
  }
}

export const homeService = new HomeService()
