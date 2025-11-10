import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Profile({userData, setUserData}) {
  let navigate = useNavigate()
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile</h1>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-semibold">
            {userData?.name?.charAt(0)}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{userData.name}</h2>
            <p className="text-sm text-gray-600">{userData.email}</p>
          </div>
        </div>
        <button
          onClick={()=>{
            setUserData({})
            localStorage.removeItem("UserData");
            navigate("/auth")
          }}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
