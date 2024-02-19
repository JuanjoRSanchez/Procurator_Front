import React, { useState } from "react";
import { Link } from "react-router-dom";

import './componentGameDetail.css'
import '../../../assets/styles/buttons.css'

import { deleteGame } from "../../../Services/games.services";
import MessageComponent from "../../messageComponent/MessageComponent";

export default function ComponentGameDetail(props) {

    const token = localStorage.getItem("jwt") 
    const game = JSON.parse( localStorage.getItem('game'))
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();
       
        deleteGame(props.gameId, token)
        .then((value) => {
            if(value === 200){
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
                </div>
                <hr/>
                <div className="btn_box">
                    <button onClick={handleDelete} className='btn_home'>Delete Collective</button>
                    <button className='btn_home'><Link to={`/updateCollective/${props.collectiveId}`}>Update Collective</Link></button>
                </div>   
            </div>
            
        </>
    )
}