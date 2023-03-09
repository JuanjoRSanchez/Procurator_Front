import React, { useEffect, useRef, useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import axios from 'axios';


export default function Partidos() {
    const email = localStorage.getItem("userEmail")
    const token = localStorage.getItem("jwt")

    const collectiveNameRef = useRef();
    
    const [collectiveName, setCollectiveName] = useState('');
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);
    const baseURL = "http://localhost:9011/api/v1/collectives/addCollective";

    useEffect(() => {
        collectiveNameRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: email,
            name: collectiveName
        }
        const resp = await axios({
            method: 'POST',
            url: baseURL,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data: body
            })
            .then((response) => {
                setErrMsg("The collective is saved corectly")
                setSucces(true)
                setCollectiveName("")      
                return JSON.stringify(response.data);     
            }
            ).catch((error) => {
                setErrMsg("The collective is not saved correctly")
                setSucces(true)
                setCollectiveName("")
                return error.response.status;
            });  
            console.log(resp)
         
            collectiveNameRef.current.focus();
    }
    /*
    else if(resp === 302){
        setErrMsg("Already exist a collective with this name")
        setSucces(true)
        setCollectiveName("")
    }
    */
    return (
        <div> 
            {
                succes 
                ?
                <MessageComponent message={errMsg} />
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

/*
<p ref={errRef} className={errMsg ? "errmsg" : "offsscreen"} aria-live="assertive">{errMsg}</p>

*/