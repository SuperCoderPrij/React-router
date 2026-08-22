import React from 'react'
import Navbar from './components/Navbar'
import MyRoutes from './routes/MyRoutes'

const App = () => {
  return (
    <div className='bg-[#0A1828] h-screen w-screen p-5 '>
        <Navbar />
      <MyRoutes />
    </div>
  )
}

export default App
