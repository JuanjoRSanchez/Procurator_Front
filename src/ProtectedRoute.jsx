import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from './context/AuthProvider';
import { isAuthenticated } from "./Services/auth.services";



export default function ProtectedRoute ({children})
{
    const context = useContext(AuthContext)
    const isLogged = context.isLoggedIn
    useEffect(() => {
        if(isAuthenticated()){
            context.setIsLoggedIn(true)
        }else{
            context.setIsLoggedIn(false)

        }
    })
    return(
        isLogged ? <Outlet/> : <Navigate to="/"/>
    )
    
}