import React, { useState } from "react";
import { Link } from "react-router-dom";

import './componentGameDetail.css'
import '../../../assets/styles/buttons.css'

import { deleteGame } from "../../../Services/games.services";
import MessageComponent from "../../messageComponent/MessageComponent";
import { getJwt, getActualGame } from '../../../Services/sessionStorage.service'

export default function ComponentGameDetail(props) {

    const token = getJwt() 
    const game = getActualGame()
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);
    const handleDelete = (e) => {
        e.preventDefault();
       
        deleteGame(game.idGame, token)
        .then((value) => {
            console.log(value)
            if(value === "200"){
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
                <MessageComponent message={errMsg} navi='/collectives'/>
                :
                null
            }
            <div className='collectiveDetail'>
                <div className="boxComponent">
                    <div>
                        <p>Game date: {game.gameDate}</p>   
                        <p>Gmae Id: {game.idGame}</p> 
                    </div>
                    <div>
                        <p>Creation date: {game.gameCreationDate}</p> 
                        <p>Hour : {game.gameHour}</p> 
                    </div>
                    <div>
                        <p>White Score: {game.scoreWhite}</p> 
                        <p>BlackScore : {game.scoreBlack}</p> 
                    </div>
                </div>
                <hr/>
                <div className="btn_box">
                    <button onClick={handleDelete} className='btn_home'>Delete Game</button>
                    <button className='btn_home'><Link to={'/updateGame'}>Update Game</Link></button>
                </div>   
            </div>
        </>
    )
}