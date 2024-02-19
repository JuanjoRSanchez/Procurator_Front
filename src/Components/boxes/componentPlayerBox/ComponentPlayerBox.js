import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deletePlayer } from "../../../Services/players.service";
import MessageComponent from "../../messageComponent/MessageComponent";

import './componentPlayerBox.css'

export default function ComponentPlayerBox(props) {

    const token = localStorage.getItem("jwt")
    const [msg, setMsg] = useState('')
    const [succes, setSucces] = useState(false);

    const handleDelete = () => {
        deletePlayer(props.id, token).then((data) => {
            if(data.status === '200'){
                setMsg('Player deleted correctly')
                setSucces(true)
            }else{
               setMsg('Player not deleted correctly')
               setSucces(true) 
            }

        })
    }

    return (
        <>
            {
                succes 
                ?
                <MessageComponent message={msg} navi={`/players/${props.idCollective}`} />
                :
                null
            }
            
            <div className="body_componentBox">
                <div>
                    <div className="">
                        <p>Player name: {props.name}</p>   
                        <p>Player age: {props.age}</p> 
                    </div>
                    <div>
                        <p>Player  creation date: {props.creationDate}</p> 
                        <p>Player phone: {props.phone}</p> 
                    </div>
                </div>
                <br />
                <hr/>
                <div className="btn_box">
                    <button onClick={handleDelete} className='btn_home'>Delete player</button>
                    <button className='btn_home'><Link to={`/updateCollective/${props.collectiveId}`}>Update player</Link></button>
                </div>   
            </div>
    
         </>
    )
}