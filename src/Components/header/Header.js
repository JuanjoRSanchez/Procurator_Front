import React from "react";
import { useNavigate, Link } from 'react-router-dom'
import { logout } from "../../Services/auth/auth.services";
import { useAuth } from '../../context/AuthProvider.js'
import Logo from '../../assets/images/Logo_Pena.png'
import './header.css'
import { getUserName } from "../../Services/sessionStorage.service.js";

export default function Header(){
    

    const navigate = useNavigate();

    let userIn = false
    let userName = getUserName();
    let helloMessage = `Hello ${userName}`
    const context = useAuth()
    console.log(context)
    let isAuth = ''
    isAuth = context.isLoggedIn ? "Logout" : "LogIn";

    if(isAuth === 'Logout'){
         userIn = true    
    }
    /*else{
        logout()
    }
    */
    const handleLogOut = (e) => {
        e.preventDefault();
        context.setAuthUser({})
        context.setIsLoggedIn(false)
        context.setJwt('')
        context.setUserName('')
        context.setUserEmail('')
        logout();
        navigate("/")
    }

    return (
        <div className='body_header'>
            <div className="img_boxHeader">
                <Link to={'/'} ><img src={Logo} alt="Logotipo Amateur Manager"></img></Link>
            </div>
                { userIn 
                ? 
                <div className="use_box">
                    <div className="user_boxGreetings">
                        <p>{helloMessage}</p> <br/>
                    </div>
                    <div className="user_boxLogButton">
                        <button> <Link to={'/collectives'}>Home</Link></button>
                    </div>
                    <div className="user_boxLogButton">
                        <button onClick={handleLogOut}>{isAuth}</button>
                    </div>
                </div>
                : 
                <p></p>  
                }
        </div>
    )
}
