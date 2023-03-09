import React, { useRef, useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import axios from 'axios';


export default function Games(props) {
    const token = localStorage.getItem("jwt")

    const gameDateRef = useRef();
    
    const [gameDate, setgameDate] = useState();
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);
    const baseURL = "http://localhost:9011/api/v1/games/addGame";

   
    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            collectiveId: props.idCollective,
            dateMatch: gameDate
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
                return JSON.stringify(response.data);     
               
            }).catch((error) => {
                console.log(error)
                setErrMsg("The collective is not saved correctly")
                setSucces(true)
                return error.response.status;
            });  
            
            console.log(resp)
            /*
            if(resp === "OK"){
                console.log("guardado")
                setErrMsg("The collective is saved corectly")
                setSucces(true)
            }else{
                setErrMsg("The collective is not saved correctly")
                setSucces(true)
            }
            */
            gameDateRef.current.focus();
    }

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
                        <h1 className="title">Fill with the new game data</h1>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="gamedate" className="label">Game date:</label>
                        <input
                            type="datetime-local"
                            id='gameDate'
                            ref={gameDateRef}
                            autoComplete='off'
                            onChange={(e) => setgameDate(e.target.value)}
                            required
                            value={gameDate}
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: email,
            gameName: gameDate
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
                return JSON.stringify(response.data);     
            }
            ).catch((error) => {
                console.log(error)
                return error.response.status;
            });  
            console.log(resp)
            if(resp === "OK"){
                console.log("guardado")
                setErrMsg("The collective is saved corectly")
                setSucces(true)
                setCollectiveName("")             
            }else{
                setErrMsg("The collective is not saved correctly")
                setSucces(true)
                setCollectiveName("")
            }
            collectiveNameRef.current.focus();
    }

*/