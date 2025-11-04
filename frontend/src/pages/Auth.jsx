import React,{useState} from 'react'
import axios from 'axios'

export default function Auth({setUserData}) {
  
    async function handleSubmit(e) {
        e.preventDefault()
        let data = {
            username: e.target[0].value,
            password: e.target[1].value
        }
        let res = await axios.post('http://localhost:8000/auth/login', data)
        setUserData(res.data.user)
        
    }
  return (
    <div>
        <center>


            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username: ' />
                <input type="password" placeholder='password: ' />
                <button className=''>Login</button>
            </form>


        </center>
    </div>
  )
}
