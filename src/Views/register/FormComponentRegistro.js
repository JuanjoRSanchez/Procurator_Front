import React, { useEffect, useState, useRef } from "react";
import { signUp } from '../../Services/auth.services.js';

import { Link } from 'react-router-dom';

import '../../assets/styles/forms.css'
import '../../assets/styles/buttons.css'

export default function FormComponentPost(props) {

    const errRef = useRef();

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [succes, setSucces] = useState(false);

    useEffect(() => {
        setErrMsg('');

    }, [nombre, pass])

    const handleSubmit =  (e) => {
            e.preventDefault();
            let user = {
                name: nombre,
                password: pass,
                role: "MANAGER",
                age: edad,
                address: direccion,
                phone: telefono,
                email: email
            }
            const res = signUp(user);
            if(res !== "error"){
                setSucces(true);
            }            
        }
    return (
        <div className='body_home'>
            {succes ? (
                <section className='body_error'>
                    <h1>Estas Registrado <br /></h1>
                    <br />
                    <span>
                        <Link to='/collectives' >Ir a inicio</Link>
                    </span>
                </section>
            ) : (
                < div className='form_box'>
                    <form className="form" onSubmit={handleSubmit}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offsscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="titleContainer">
                            <h1 className="title">Datos de usuario</h1>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Nombre:</label>
                            <input 
                            type="text" 
                            name="nombre" 
                            className="input" 
                            required onChange={(e) => setNombre(e.target.value)} 
                            />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Edad:</label>
                            <input 
                            type="text" 
                            name="edad" 
                            className="input" 
                            required onChange={(e) => setEdad(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Dirección:</label>
                            <input 
                            type="text" 
                            name="direccion" 
                            className="input" 
                            required onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Teléfono:</label>
                            <input 
                            type="text" 
                            name="telefono" 
                            className="input" 
                            required onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Password:</label>
                            <input 
                            type="text" 
                            name="pass" 
                            className="input" 
                            required onChange={(e) => setPass(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Email:</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="input" 
                            required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="btnContainer">
                            <input type="submit" className="submitBtn" value="Registrar" />
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}
