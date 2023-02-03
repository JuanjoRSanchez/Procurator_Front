import React, { useEffect, useRef, useState } from 'react';
//import userAuth from '../../Services/auth.services.js';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

import '../../assets/styles/forms.css'


export default function FormComponentLogin() {
    //const { setAuth } = userAuth();
    const API_URL = "http://localhost:9011/api/v1/auth";

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/penas";

    const userRef = useRef();
    const errRef = useRef();

    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const [succes, setSucces] = useState(true);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');

    }, [userEmail, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: userEmail,
            password: password
        }
        axios.post(API_URL + "/authenticate", JSON.stringify(user),
                {
                    headers: {'Content-Type': 'application/json'},
                }
                ).then((response) => {
                    console.log(response.data)    
                    localStorage.setItem("userEmail", user.email)        
                    localStorage.setItem("jwt", response.data.token)
                    localStorage.setItem("userName", response.data.userName);
                    
                    navigate(from, { replace: true });
                }).catch((error) => {
                    console.log(error);
                    setSucces(false);
                });  
    }

    return (
        <div>
            {!succes ? (
                <section>
                   <h2>Necesitas registrarte<br /></h2>
                    <span className='line'>
                        {/* */}
                        <Link to='/register'>Registrarse</Link>
                    </span>
                </section>
            ) : (
                <div className='form_box'>
                    <form className="form" onSubmit={handleSubmit}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offsscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="titleContainer">
                            <h1 className="title">Datos de usuario</h1>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="name" className="label">Email de usuario:</label>
                            <input
                                type="text"
                                id='email'
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setUserEmail(e.target.value)}
                                required
                                value={userEmail}
                                className="input"
                            />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="password" className="label">Password:</label>
                            <input
                                type="password"
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                value={password}
                                className="input"
                            />
                        </div>
                        <div className="btnContainer">
                            <button type="submit" className="submitBtn" value="Actualizar" >Entrar</button>
                        </div>
                        
                    </form>
                </div>
            )}
            </div>
    )
}

