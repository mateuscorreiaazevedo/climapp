import { toast } from 'react-toastify'

export const useNotification = () => {
  const setNotification = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 2000,
      closeButton: true,
      theme: 'colored'
    })
  }

  return {
    setNotification
  }
}
