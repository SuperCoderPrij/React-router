import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Form from '../pages/Form'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} >
                <Route path='/contact/form' element={<Form />} />
            </Route>
        </Routes>
    </div>
  )
}

export default MyRoutes