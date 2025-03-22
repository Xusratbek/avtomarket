import React, {  } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import Models from './Home/Models'
import Outside from './Home/Outside'
import AdminPanel from './Home/AdminPanel'
import Otp from './auth/Otp'


function App() {
  

  return (
   <Routes>
    <Route path='/'  element={<Home/>}  />
    <Route path='/register' element={<Register/>} />
    <Route path='/otp' element={<Otp/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/models'  element={<Models/>} />
    <Route path='/outside' element={<Outside/>} />
    <Route path='/admin' element={<AdminPanel/>} />



   </Routes>
  )
}

export default App
