import React,{useState} from 'react'

import NavBar from './components/NavBar.jsx'

import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Profile from './pages/Profile.jsx'
import Auth from './pages/Auth.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
    let [userData, setUserData] = useState({})
  return (
    <div>
      <BrowserRouter>
        <NavBar userData = {userData} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth setUserData = {setUserData} />} />
          <Route path="*" element={<h2>
            404
          </h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
