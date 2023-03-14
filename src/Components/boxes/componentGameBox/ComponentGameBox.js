import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'


import './componentGameBox.css'
import '../../../assets/styles/buttons.css'

import MessageComponent from "../../messageComponent/MessageComponent";
import { deleteGame } from "../../../Services/games.services";

export default function ComponentGameBox(props) {

    const token = localStorage.getItem("jwt") 
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

    const box = useRef(null)
    
    let played = false;
    const dateGame = new Date(props.gameDate);
    const actualDate = new Date()
    const played_Class = 'body_gameComponentBox played';
    const notPlayed_Class = 'body_gameComponentBox not_played'
    if(dateGame < actualDate){
        played = true
    }

    useEffect(() => {
        if(played){
            box.current.className = played_Class
        }else{
            box.current.className = notPlayed_Class
        }
    }, [played, box, played_Class, notPlayed_Class ]);
    
    const handleDelete = (e) => {
        e.preventDefault();
        deleteGame(props.idGame, token)
            .then((value) => {
                console.log(value)
                if(value === '200'){
                    setErrMsg("The collective is deleted corectly")
                    setSucces(true)
                }else{
                    setErrMsg("The collective is not deleted correctly")
                    setSucces(true)
                }
            })
    }
   
    return (
        <>
            {
                succes 
                ?
                <MessageComponent message={errMsg} />
                :
                null
            }
            <div ref={box} id='box_game'>
                <div className="gameBoxComponent">
                        <p>Game creationDate: {props.gameCreationDate}</p>   
                        <p>WhiteScore: {props.scoreWhite}</p> 
                        <p>BlackScore: {props.scoreBlack}</p> 
                        <p>Game date: {props.gameDate}</p> 
                        <p>Game hour: {props.gameHour}</p>
                        {
                            played
                            ?
                            <p>
                                Game already played
                            </p>
                            :
                            <p>
                                Game not played yet
                            </p>
                        }    
                </div>
                <div className="btn_boxGame">
                    <button className='btn_showHide'><Link to={`/updateGame/${props.idGame}` }>Update game</Link></button>
                    <button onClick={handleDelete} className='btn_showHide'>Delete Game</button>
                </div>   
            </div>
        </>
    )
}

