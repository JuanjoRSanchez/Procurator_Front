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
                <div className='logoBox'>
                    <img src={Logo} alt='Logo Amateur Manager' className='logo'></img>
                </div>
                <div className='botonera_home'>
                    <button className='btn_home' onClick={handleSingOut}><Link to='/login' >Login</Link></button>
                    <button className='btn_home'><Link to='/register' >Registrarse</Link></button>
                </div>
                <div className='text_content'>
                    <hr/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
    )

}
