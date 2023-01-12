import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '@/modules/core'
import { Layout } from '..'
import React from 'react'

function App () {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center h-screen">
        <Layout />
        <ToastContainer />
      </div>
    </ThemeProvider>
  )
}

export default App
