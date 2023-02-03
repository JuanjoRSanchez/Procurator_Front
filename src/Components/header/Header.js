import React from "react";
import {Link} from 'react-router-dom'

import Logo from '../../assets/images/Logo_Pena.png'
import './header.css'

export default function Header(){
    let userIn = localStorage.getItem("userEmail");
    let userName = localStorage.getItem("userName");

    return (
        <div className='body_header'>
            <div className="img_boxHeader">
                <Link to='/'><img src={Logo} alt="Logotipo Amateur Manager"></img></Link> 
            </div>
            <div className="use_box">
                { userIn ? 
                    <div>
                        <p>Hello! {userName}</p> 
                    </div>
                        : 
                    <p></p>  
                }
            </div>
        </div>
    )
}