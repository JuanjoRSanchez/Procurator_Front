import React, { useEffect, useRef, useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import { updateCollective } from '../../../Services/collective.service.js';


export default function FormComponentCollectiveUpdate(props) {
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
            idCollective: props.idCollective,
            newName: collectiveName
        }
        console.log(body)
        const resp = await updateCollective(body, token)
        .then((value) => {
                if(value === 200){
                    setErrMsg("The collective is updated corectly")
                    setSucces(true)
                }else{
                    setErrMsg("The collective is not updated correctly")
                    setSucces(true)
                }
                
        });

        console.log(resp)
         
        collectiveNameRef.current.focus();
    }

    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: email,
            name: collectiveName
        }
        const resp = await axios({
            method: 'PUT',
            url: baseURL,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data: body
            })
            .then((response) => {
                
                setErrMsg("The collective is updated corectly")
                setSucces(true)
                setCollectiveName("")      
                return JSON.stringify(response.data);     
            }
            ).catch((error) => {
                setErrMsg("The collective is not updated correctly")
                setSucces(true)
                setCollectiveName("")
                return error.response.status;
            });  
            console.log(resp)
         
            collectiveNameRef.current.focus();
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
                        <h1 className="title">Fill with the new name</h1>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="name" className="label">New collective name:</label>
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
                        <button type="submit" className="submitBtn" value="Actualizar">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
