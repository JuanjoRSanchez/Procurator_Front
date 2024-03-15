import { createContext, useState, useContext, useEffect } from "react";
import { isAuthenticated } from "../Services/auth/auth.services";
import { getJwt, getUserEmail, getUserName } from "../Services/sessionStorage.service";

export const AuthContext = createContext();

const initialAuth = true;

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [authUser, setAuthUser] = useState(initialAuth);
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated())
    const [userName, setUserName] = useState(getUserName())
    const [userEmail, setUserEmail] = useState(getUserEmail())
    const [jwt, setJwt] = useState(getJwt())

    useEffect(() => {
        if(!isLoggedIn){
            setIsLoggedIn(false)
            setAuthUser(false)
            setUserName(null)
            setUserEmail(null)
        }
    }, [isLoggedIn])
    
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        jwt,
        setJwt,
        userName,
        setUserName,
        userEmail,
        setUserEmail
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext ;




