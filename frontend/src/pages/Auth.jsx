import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Auth({setUserData}) {
    let navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("UserData")){
            navigate("/")
        }
    },[])
  
    async function handleSubmit(e) {
        e.preventDefault()
        let data = {
            username: e.target[0].value,
            password: e.target[1].value
        }
        let res = await axios.post('http://localhost:8000/auth/login', data)
        console.log(res.data);
        setUserData(res.data.user)
        localStorage.setItem("UserData", JSON.stringify(res.data.user))
        navigate("/")
        
    }
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
            <p className="text-sm text-gray-500 mb-6">Please sign in to continue</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input type="text" placeholder="Enter your username" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <button className="w-full inline-flex justify-center items-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 transition-colors">Login</button>
            </form>
        </div>
    </div>
  )
}
