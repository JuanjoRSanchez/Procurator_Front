import React, { useEffect, useRef, useState } from 'react';
import { login }from '../../../Services/auth/auth.services.js';
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
    const context = useAuth()
    useEffect(() => {
        if(userRef != null){
            userRef.current.focus();
        }
        
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
        login(user).then((data) => {
            if(data.status === "OK"){
                console.log(data)
                context.setIsLoggedIn(true) 
                context.setUserEmail(user.email)
                context.setJwt(data.token)
                context.setUserName(data.userName)
                navigate("/collectives");
            }else{
                setErrMsg("Doesn't exist an User with this credentials")
                setSucces(false)
            }
        }) 
    }

    return (
        <div className='body_home'>
            {!succes 
            ? 
            (
                <section className='body_error'>
                   <h2>Necesitas registrarte<br /></h2>
                   <p>{errMsg}</p>
                    <span className='line'>
                        <Link to='/register'>Registrarse</Link>
                    </span>
                </section>
            ) 
            : 
            (
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

