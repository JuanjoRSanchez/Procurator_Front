import { createContext, useState } from "react";


const AuthContext = createContext({});

const initialAuth = null;

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(initialAuth);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
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