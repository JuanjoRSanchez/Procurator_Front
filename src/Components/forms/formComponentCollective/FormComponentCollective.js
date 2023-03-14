import React, { useEffect, useRef, useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import { addCollective } from '../../../Services/collective.service.js';


export default function Partidos() {
    const email = localStorage.getItem("userEmail")
    const token = localStorage.getItem("jwt")

    const collectiveNameRef = useRef();
    
    const [collectiveName, setCollectiveName] = useState('');
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

    useEffect(() => {
        collectiveNameRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: email,
            name: collectiveName
        }

        addCollective(body, token).then((data) =>{
            console.log(data)
            if(data === '200'){
                setErrMsg("The collective is saved corectly")
                setCollectiveName("")      
                setSucces(true)
            }else{
                setErrMsg("The collective is not saved correctly")
                setSucces(true)
                setCollectiveName("")      
            }
        }
        )
         
        collectiveNameRef.current.focus();
    }

    return (
        <div> 
            {
                succes 
                ?
                <MessageComponent message={errMsg} navi={'/collectives'}/>
                :
                null
            }
            <div className='form_box'>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="titleContainer">
                        <h1 className="title">Collectives information</h1>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="name" className="label">Collective name:</label>
                        <input
                            type="text"
                            id='name'
                            ref={collectiveNameRef}
                            autoComplete='off'
                            onChange={(e) => setCollectiveName(e.target.value)}
                            required
                            value={collectiveName}
                            className="input"
                        />
                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="submitBtn" value="Actualizar" >Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

