import React, { useState } from "react";
import { Link } from "react-router-dom";

import './componentGameDetail.css'
import '../../../assets/styles/buttons.css'

import { deleteGame } from "../../../Services/games.services";
import MessageComponent from "../../messageComponent/MessageComponent";
import { getJwt, getActualGame } from '../../../Services/sessionStorage.service'
import { deletePlayerFromGame, getPlayersByGame } from "../../../Services/players.service";

export default function ComponentGameDetail(props) {

    const token = getJwt() 
    const game = getActualGame()
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);
    const handleDelete = (e) => {
        e.preventDefault();
        getPlayersByGame(game.idGame, token).then((value) => {
            if(value.length > 0){
                for(let prop in value){
                    deletePlayerFromGame(game.idGame, value[prop].id, token).then((value) => {
                        if(value === ''){
                            console.log("Error")
                        }else{
                            deleteGame(game.idGame, token).then((value) => {
                                if(value === "200"){
                                    setErrMsg("The game has been deleted corectly")
                                    setSucces(true)
                                }else{
                                    setErrMsg("The game has not been deleted correctly")
                                    setSucces(true)
                                }         
                            })
                        }
                    })
                }
            }
        });    
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