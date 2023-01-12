import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '..'
import React from 'react'

type Props ={
  city_name: string
  country_code: string
}

const Header = ({ city_name, country_code }: Props) => {
  const { handleTheme, isLight } = useTheme()

  return (
    <>
      <header className="w-full h-8">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className=" flex-grow text-base md:text-xl">
            <strong className='mr-1'>{city_name},</strong><span className='uppercase'>{country_code}</span>
          </h1>
          <button onClick={handleTheme} className="text-3xl transition-all">
            {isLight ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
