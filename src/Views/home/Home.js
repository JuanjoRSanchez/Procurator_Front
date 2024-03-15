import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import '../../assets/styles/buttons.css'
import '../../assets/styles/principal.css'
import { logout } from '../../Services/auth/auth.services'

import Logo from '../../assets/images/Logo_Pena.png'

export default function Home() {

    

    const handleSingOut = (e) => {
        e.preventDefault();
        logout();
    }

    return (
            <div className='body_home'>
                <div className='box-main-home'>
                    <div className='logoBox'>
                        <img src={Logo} alt='Logo Amateur Manager' className='logo'></img>
                    </div>
                    <div className='text_content'>
                        <p>Amateur Manager allows you to manage your amateur teams. You can keep track of your teams, players, matches and much more comfortably from your mobile or PC.</p> 
                    </div>
                </div>
                <div className='botonera_home'>
                    <div className='botonera_home-sub1'>
                        <button className='btn_home' onClick={handleSingOut}><Link to='/login' >Login</Link></button>
                    </div>
                    <div className='botonera_home-sub1'>
                        <button className='btn_home'><Link to='/register' >Registrarse</Link></button>
                    </div>
                </div>
            </div>
    )

}
