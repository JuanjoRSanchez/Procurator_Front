import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import '../../assets/styles/botons.css'
import '../../assets/styles/principal.css'

import Logo from '../../assets/images/Logo_Pena.png'

export default function Home() {

    return (
        <>
            <div className='body_home'>
                <div className='logoBox'>
                    <img src={Logo} alt='Logo Amateur Manager' className='logo'></img>
                </div>
                <div className='botonera_home'>
                    <button className='btn_home'><Link to='/login' >Login</Link></button>
                    <button className='btn_home'><Link to='/register' >Registrarse</Link></button>
                </div>
            </div>
        </>
    )

}
