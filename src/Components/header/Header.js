import React from "react";
import { useNavigate, Link } from 'react-router-dom'
import { isTokenExpired, logout } from "../../Services/auth.services";

import { useAuth } from '../../context/AuthProvider.js'
import Logo from '../../assets/images/Logo_Pena.png'
import './header.css'

export default function Header(){

    const navigate = useNavigate();

    let userIn = localStorage.getItem("userEmail");
    let userName = localStorage.getItem("userName");
    let helloMessage = `Hello ${userName}`
    let token = "";
    if(localStorage.getItem("jwt")){ token = localStorage.getItem("jwt")}
    let tokeenExpired = false;
    if(token){
        tokeenExpired = isTokenExpired(token) ? "LogIn" : "Logout" ;
    }else{
        userIn = ""
    }
    const { setAuthUser, setIsLoggedIn} = useAuth()

    const handleLogOut = (e) => {
        e.preventDefault();
        setAuthUser({})
        setIsLoggedIn(false)
        logout();
        navigate("/")
    }

    return (
        <div className='body_header'>
            <div className="img_boxHeader">
                <Link to={'/'} ><img src={Logo} alt="Logotipo Amateur Manager"></img></Link>
            </div>
                { userIn ? 
                    <div className="use_box">
                        <div className="user_boxGreetings">
                           <p>{helloMessage}</p> <br/>
                        </div>
                        <div className="user_boxLogButton">
                           <button> <Link to={'/collectives'}>Home</Link></button>
                        </div>
                        <div className="user_boxLogButton">
                            <button onClick={handleLogOut}>{tokeenExpired}</button>
                        </div>
                    </div>
                        : 
                    <p></p>  
                }
        </div>
    )
}
