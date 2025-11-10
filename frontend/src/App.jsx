import React,{useState,useEffect} from 'react'

import NavBar from './components/NavBar.jsx'
import PriavteRoute from './components/PrivateRoute.jsx'

import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Profile from './pages/Profile.jsx'
import Auth from './pages/Auth.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
    let [userData, setUserData] = useState({})
    useEffect(()=>{
      if(localStorage.getItem("UserData")){
        setUserData(JSON.parse(localStorage.getItem("UserData")))
      }
    },[])
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <BrowserRouter>
        <NavBar userData = {userData} />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
              <PriavteRoute userData = {userData}>
                <Products />
              </PriavteRoute>
            } />
            <Route path="/profile" element={
              <PriavteRoute userData = {userData}>
                <Profile userData = {userData} setUserData = {setUserData} />
              </PriavteRoute>
            } />
            <Route path="/auth" element={<Auth setUserData = {setUserData} />} />
            <Route path="*" element={<h2 className="text-2xl font-semibold text-gray-700">404</h2>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
