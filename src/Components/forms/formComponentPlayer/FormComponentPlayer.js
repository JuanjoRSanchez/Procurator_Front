
import React, { useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import { addPlayerToCollective } from '../../../Services/players.service.js';
import { getActualCollectiveId, getJwt } from '../../../Services/sessionStorage.service.js';


export default function FormComponentPlayer() {
    const token = getJwt()
    const idCollective = getActualCollectiveId();

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [active, setActive] = useState()

    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let player = {
            name: nombre,
            password: pass,
            role: "PLAYER",
            age: edad,
            address: direccion,
            phone: telefono,
            email: email,
            active: active
        }
        let body = {
            player: player,
            idCollective: parseInt(idCollective)
        }
        addPlayerToCollective(body, token).then((data) => {
                if(data === 200){
                    setErrMsg("The player is saved corectly")
                    setSucces(true)
                }else{
                    setErrMsg("The player is not saved correctly")
                    setSucces(true)
                }
            })
    }

    return (
        <div> 
            {
                succes 
                ?
                <MessageComponent message={errMsg} navi='/players' />
                :
                null
            }
            <div className='form_box'>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="titleContainer">
                        <h1 className="title">Fill with the new player data</h1>
                    </div>
                    <div className="inputContainer">
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
                            type="text" 
                            name="email" 
                            className="input" 
                            required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="inputContainer ">
                            <div  className=" red">
                                <label htmlFor="" className="label ">Active:</label>
                                <input 
                                value={true}
                                id='active1'
                                type="radio" 
                                name="active" 
                                className="input " 
                                required onChange={(e) => setActive(e.target.value)} />
                            </div>
                            <div className=" red">
                                <label htmlFor="" className="label ">Not active:</label>
                                <input 
                                value={false}
                                id='active2'
                                type="radio" 
                                name="active" 
                                className="input " 
                                required onChange={(e) => setActive(e.target.value)} />
                            </div>
                    
                        </div>
                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="submitBtn" value="Actualizar" >Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

