import React from 'react'

type Props = {
  title: string
  value: string | number
  icon: any
  type: 'wind' | 'uv' | 'temp' | 'clouds'
}

const CardSm = ({ icon, title, value, type }: Props) => {
  let valueSystem = ''

  switch (type) {
    case 'clouds':
      valueSystem = '%'
      break
    case 'temp':
      valueSystem = ''
      break
    case 'uv':
      valueSystem = ''
      break
    case 'wind':
      valueSystem = 'km/h'
      break
    default:
      valueSystem = ''
  }

  return (
    <div className="flex items-center gap-2 justify-start dark:bg-dark-background dark:hover:bg-darken bg-light-alpha rounded-lg h-16 py-2 px-6 hover:bg-lighten transition-all shadow-lg">
      <span className="md:text-xl text-lg">{icon}</span>
      <div className="md:text-sm text-xs">
        <h3 className="text-gray-500 dark:text-lighten">{title}</h3>
        <strong>
          {value}
          {valueSystem}
        </strong>
      </div>
    </div>
  )
}

export default CardSm
