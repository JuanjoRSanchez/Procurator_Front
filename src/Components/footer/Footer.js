import React from "react";
import Logo from '../../assets/images/Logo_Pena.png'
import './footer.css'

export default function Header(){

    return (
        <div className='body_footer'>
            <div className="img_boxFooter">
                <img src={Logo} alt="Logotipo Amateur Manager"></img>
            </div>
        </div>
    )
}