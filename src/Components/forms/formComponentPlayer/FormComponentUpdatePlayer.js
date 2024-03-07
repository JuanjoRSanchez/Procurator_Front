import React, { useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import { updatePlayer } from '../../../Services/players.service.js';
import { getActualPlayer, getJwt } from '../../../Services/sessionStorage.service.js';


export default function FormComponentUpdatePlayer(props) {
    const token = getJwt()
    const actualPlayer = getActualPlayer();

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
            id: actualPlayer.idPlayer,
            name: nombre,
            password: pass,
            role: "PLAYER",
            age: edad,
            address: direccion,
            phone: telefono,
            email: email,
            active: active
        }
        console.log(player)
        updatePlayer(player, token).then((data) => {
                if(data.status === 200){
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
                            <label htmlFor="" className="label">Name:</label>
                            <input 
                            type="text" 
                            name="nombre" 
                            className="input" 
                            placeholder={actualPlayer.name}
                            onChange={(e) => setNombre(e.target.value)} 
                            />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Age:</label>
                            <input 
                            type="text" 
                            name="edad" 
                            className="input" 
                            placeholder={actualPlayer.age}
                            onChange={(e) => setEdad(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Address:</label>
                            <input 
                            type="text" 
                            name="direccion" 
                            className="input" 
                            placeholder={actualPlayer.address}
                            onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Teléfono:</label>
                            <input 
                            type="text" 
                            name="telefono" 
                            className="input" 
                            placeholder={actualPlayer.phone}
                            onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Password:</label>
                            <input 
                            type="text" 
                            name="pass" 
                            className="input" 
                            onChange={(e) => setPass(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Email:</label>
                            <input 
                            type="text" 
                            name="email" 
                            className="input" 
                            placeholder={actualPlayer.email}
                            onChange={(e) => setEmail(e.target.value)} />
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
                                onChange={(e) => setActive(e.target.value)} />
                            </div>
                            <div className=" red">
                                <label htmlFor="" className="label ">Not active:</label>
                                <input 
                                value={false}
                                id='active2'
                                type="radio" 
                                name="active" 
                                className="input" 
                                onChange={(e) => setActive(e.target.value)} />
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

