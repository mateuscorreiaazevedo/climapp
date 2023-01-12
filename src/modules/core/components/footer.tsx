import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full md:h-8 absolute bottom-0 left-0">
      <div className="container mx-auto flex flex-col justify-center md:flex-row items-center md:justify-between">
        <p className='md:ml-4'>
          Climapp &copy; <strong>2023</strong>
        </p>
        <p className='md:mr-10'>
          Powered by{' '}
          <a
            href="https://mateusdev.com.br"
            target="_blank"
            rel="noreferrer"
            className='hover:font-bold transition-all hover:tracking-wide'
          >
            Mateus Azevedo
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
