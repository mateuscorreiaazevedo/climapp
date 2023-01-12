import React from 'react'

type Props = {
  title: string
  value: string
  icon: any
}
const CardLg = ({ icon, title, value }: Props) => {
  return (
    <div className="flex items-center flex-grow gap-2 justify-start dark:bg-dark-background dark:hover:bg-darken bg-light-alpha rounded-lg h-16 py-2 px-6 hover:bg-lighten transition-all shadow-lg">
      <span className="md:text-xl text-lg">
        {icon}
      </span>
      <div className="md:text-sm text-xs">
        <h3 className="text-gray-500 dark:text-lighten">{title}</h3>
        <strong>{value}</strong>
      </div>
    </div>
  )
}

export default CardLg
