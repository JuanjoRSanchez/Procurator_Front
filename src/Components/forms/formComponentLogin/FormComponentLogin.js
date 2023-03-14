import React, { useEffect, useRef, useState } from 'react';
import { login }from '../../../Services/auth.services.js';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth }  from '../../../context/AuthProvider.js'
import '../../../assets//styles/forms.css'


export default function FormComponentLogin() {
    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const [succes, setSucces] = useState(true);


    useEffect(() => {
        if(userRef != null){
            userRef.current.focus();
        }
        
    }, [])

    useEffect(() => {
        setErrMsg('');

    }, [userEmail, password])
    const { setAuthUser, setIsLoggedIn} = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: userEmail,
            password: password
        }
        const res = await login(user);
        if(res === "ok"){    
            setSucces(false);   
        }else {
            setAuthUser(res);
            setIsLoggedIn(true) 
            navigate("/collectives");
        }        
    }

    return (
        <div className='body_home'>
            {!succes ? (
                <section className='body_error'>
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

