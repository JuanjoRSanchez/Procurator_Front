import React, { useRef, useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import axios from 'axios';


export default function FormComponentUpdateGame(props) {
    const token = localStorage.getItem("jwt")

    const gameDateRef = useRef();
    const whiteScoreRef = useRef();
    const blackScoreRef = useRef();

    
    const [gameDate, setgameDate] = useState();
    const [whiteScore, setWhiteScore] = useState();
    const [blackScore, setBlackScore] = useState();


    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);
    const baseURL = "http://localhost:9011/api/v1/games/update";

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            id: props.isGame,
            whiteScore: whiteScore,
            blackScore: blackScore,
            dateMatch: gameDate
        }
        console.log(body)
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
            }else{
                setErrMsg("The collective is not saved correctly")
                setSucces(true)
            }
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
                        <label htmlFor="whiteScore" className="label">White score:</label>
                        <input
                            type="text"
                            id='whiteScore'
                            ref={whiteScoreRef}
                            autoComplete='off'
                            onChange={(e) => setWhiteScore(e.target.value)}
                            required
                            value={whiteScore}
                            className="input"
                        />
                        <label htmlFor="blackScore" className="label">Black score:</label>
                        <input
                            type="text"
                            id='blackScore'
                            ref={blackScoreRef}
                            autoComplete='off'
                            onChange={(e) => setBlackScore(e.target.value)}
                            required
                            value={blackScore}
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

