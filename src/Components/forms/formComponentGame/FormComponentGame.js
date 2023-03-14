import React, { useRef, useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import { addGame } from '../../../Services/games.services.js';


export default function Games(props) {
    const token = localStorage.getItem("jwt")

    const gameDateRef = useRef();
    
    const [gameDate, setgameDate] = useState();
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

   
    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            collectiveId: props.idCollective,
            dateMatch: gameDate
        }

        addGame(body, token)
            .then((data) => {
                console.log(data)
                if(data === '200'){
                    setErrMsg("The game is saved corectly")
                    setSucces(true)
                }else{
                    setErrMsg("The game is not saved correctly")
                    setSucces(true)
                }
            })

            gameDateRef.current.focus();
    }

    return (
        <div> 
            {
                succes 
                ?
                <MessageComponent message={errMsg}  />
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

