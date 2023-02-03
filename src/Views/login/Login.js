import React from 'react'
import Header from '../../Components/header/Header.js'
import Footer from '../../Components/footer/Footer.js'
import FormComponentLogin from '../../Components/formComponentLogin/FormComponentLogin.js'

export default function Login() {

    return (
        <div className='body_principal'>
            <Header />
            <div className='body_principal'>
                <FormComponentLogin />
            </div>
            <Footer />
        </div>
    )
}

