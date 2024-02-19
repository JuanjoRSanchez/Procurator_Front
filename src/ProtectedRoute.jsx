import { Navigate, Outlet } from 'react-router-dom'
import  { useAuth } from './context/AuthProvider';

export default function ProtectedRoute ()
{
    const context = useAuth()
    const isLogged = context.isLoggedIn
    
    return(
        isLogged ? <Outlet/> : <Navigate to="/"/>
    )
    
}