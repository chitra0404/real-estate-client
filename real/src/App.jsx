import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Register from './components/User/Register'
import Login from './components/User/Login'
import CreateProperty from './components/Property/CreateProperty'

function App() {
  

  return (
    <>
<Router>
  
<Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addprop" element={<CreateProperty />} />
      </Routes>
</Router>
  
    </>
  )
}

export default App
