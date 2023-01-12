import { homeService } from '@/modules/home'
import { useNotification } from '..'
import React from 'react'

export const useCurrentLocation = () => {
  const [data, setData] = React.useState<Weather[]>([])
  const [loading, setLoading] = React.useState(false)
  const { setNotification } = useNotification()

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      setLoading(true)
      try {
        const response = await homeService.getCurrentLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
        setData(response.data)
      } catch (error) {
        setNotification((error as any).message)
      } finally {
        setLoading(false)
      }
    })
  }, [])

  return { data, loading, setData }
}
