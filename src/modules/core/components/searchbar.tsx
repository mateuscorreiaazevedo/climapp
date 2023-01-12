import { homeService } from '@/modules/home'
import { FiSearch } from 'react-icons/fi'
import { useNotification } from '..'
import React from 'react'

type Props = {
  setData: React.Dispatch<React.SetStateAction<Weather[]>>
}

const Searchbar = ({ setData }: Props) => {
  const [city, setCity] = React.useState('')
  const { setNotification } = useNotification()

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const ENTER = e.key === 'Enter'

    if (ENTER && city.length) {
      try {
        const response = await homeService.getCity(city)
        setData(response.data)
      } catch (error) {
        setNotification((error as any).message)
      }
    }
  }

  return (
    <div className="group text-lg  flex items-center px-2 bg-lighten dark:bg-darken rounded-lg w-fit">
      <FiSearch className="text-gray-300 dark:text-gray-400" />
      <input
        className="bg-transparent pl-2 w-80 focus:w-80 transition-all focus:outline-none"
        placeholder="Pesquise por uma cidade"
        onChange={e => setCity(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>
  )
}

export default Searchbar
