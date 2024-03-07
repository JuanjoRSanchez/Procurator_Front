import React, { useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import { updateGame } from '../../../Services/games.services.js';
import { getJwt, getActualGame, getActualCollective } from '../../../Services/sessionStorage.service.js';


export default function FormComponentUpdateGame(props) {
    const token = getJwt()
    const alctualCollective = getActualCollective()
    const actualGame = getActualGame()
    const [gameDate, setgameDate] = useState('');
    const [whiteScore, setWhiteScore] = useState('');
    const [blackScore, setBlackScore] = useState('');

    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            id: actualGame.idGame,
            whiteScore: whiteScore,
            blackScore: blackScore,
            dateMatch: gameDate
        }
        updateGame(body, token).then((data) =>{
            if(data === "200"){
                setErrMsg("The collective is saved corectly")
                setSucces(true)
            }else{
                setErrMsg("The collective is not saved correctly")
                setSucces(true)
            }
        })
    }


    return (
        <div> 
            {
                succes 
                ?
                <MessageComponent message={errMsg} navi={`/collectiveDetail/${alctualCollective}`}/>
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
                            autoComplete='off'
                            onChange={(e) => setgameDate(e.target.value)}
                            value={gameDate}
                            className="input"
                        />
                        <label htmlFor="whiteScore" className="label">White score:</label>
                        <input
                            type="text"
                            id='whiteScore'                           
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

