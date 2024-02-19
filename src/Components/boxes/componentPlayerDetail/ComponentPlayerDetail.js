import React, { useState } from "react";
import { Link } from "react-router-dom";

import './componentPlayerDetail.css'
import '../../../assets/styles/buttons.css'

import MessageComponent from "../../messageComponent/MessageComponent";
import { deletePlayer } from "../../../Services/players.service";

export default function ComponentPlayerDetail(props) {

    const token = localStorage.getItem("jwt") 
    const actualPlayer = JSON.parse(localStorage.getItem('actualPlayer'))
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleDeletePlayer = (e) => {
        e.preventDefault();
       
        deletePlayer(actualPlayer.idPlayer, token)
        .then((data) => {
            if(data.status === 200){
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
                        <p>Player Id: </p>   
                        <p>{actualPlayer.idPlayer}</p>   
                        <p>Player name:</p> 
                        <p>{actualPlayer.name}</p> 
                        <p>Player age:</p>
                        <p>{actualPlayer.age}</p>
                        <p>Player phone:</p>
                        <p>{actualPlayer.phone}</p>
                    </div>
                    
                </div>
                <hr/>
                <div className="btn_box">
                    <button onClick={handleDeletePlayer} className='btn_home'>Delete player</button>
                    <button className='btn_home'><Link to={'/updatePlayer'}>Update player</Link></button>
                </div>   
            </div>
            
        </>
    )
}