import React from 'react'
import MainRoutes from './Routes/MainRoutes'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-gray-700 w-screen h-screen text-white font-thin py-10 px-30'>
      <Navbar />
      <MainRoutes/>
    </div>
  )
}

export default App