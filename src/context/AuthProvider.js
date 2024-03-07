import { createContext, useState, useContext } from "react";
import { isAuthenticated } from "../Services/auth/auth.services";

export const AuthContext = createContext();

const initialAuth = null;

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    
    const [authUser, setAuthUser] = useState(initialAuth);
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated())


    // const [authUser, setAuthUser] = useState(initialAuth);
    // const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated())
    let jwt = '';
    
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        jwt,
    }
    

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext ;




