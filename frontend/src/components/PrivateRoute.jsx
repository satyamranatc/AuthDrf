import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({userData, children}) {
 
    if(userData.id){
        return children
    }
    else
    {
        return <Navigate to="/auth"/>
    }
}
