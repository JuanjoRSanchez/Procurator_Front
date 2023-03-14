import { createContext, useState, useContext } from "react";


export const AuthContext = createContext();

const initialAuth = null;

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [authUser, setAuthUser] = useState(initialAuth);
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext ;




/*
const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(undefined);

    useEffect(() => {
            let cuser = isAuthenticated();
            if(cuser === null){
                localStorage.setItem('userName', '');
                cuser = '';
            }
            setAuth(cuser)
        
    },[auth]);

    let cuser = isAuthenticated();
    if(cuser === null){
        localStorage.setItem('userName', '');
        cuser = '';
    }
    setAuth(cuser)
    //console.log('userContext', auth)

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext };
*/
/*
const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
*/