import React, { useEffect, useState } from "react";

import './gameDetail.css'
import '../../../assets/styles/buttons.css'
import ComponentGameDetail from "../../../Components/boxes/componentGameDetail/ComponentGameDetail";
import { getPlayersAddedToGame } from "../../../Services/players.service";
import { Link } from "react-router-dom";
import ComponentPlayerToGameBox from "../../../Components/boxes/componentPlayerToGameBox/ComponentPlayerToGameBox";
import { getJwt, getActualIdGame, getActualGame } from "../../../Services/sessionStorage.service";


export default function Game(props) {
    const token = getJwt()
    const game = getActualGame()

    const idActualGame = getActualIdGame()
    const [msg, setMsg] = useState('')

    const [players, setPlayers] = useState(null)

    useEffect(() => {
        getPlayersAddedToGame(idActualGame, token).then((data) => {
            if(data.length){
                if(data[0].email){
                    setPlayers(data)                 
                }
            }
            else{
                setMsg(`You don't have players yet`)
            }
        })
    }, [idActualGame, token])

    return (
        <div className='body_principal'>
            <div className='boxComponent_collective_visto' id='collective_details'>
                {
                    game 
                    ? 
                    <ComponentGameDetail />               
                    : 
                    <p>No data found for this game</p>
                }           
            </div>  
            <div className='nuevoBox1' >
                <Link to='/addPlayerToGame'><button  className='btn_showHide'>Add new player</button></Link>
            </div>
            <p className='titulo'>Players added to this game</p>
            <hr />                       
            <div className='boxComponent_collective_'>
            {
                players
                ?
                Array.from(players).map((player) => {
                    return <ComponentPlayerToGameBox
                                key={player.id} 
                                idPlayer={player.id}
                                name={player.name} 
                                email={player.email}
                                age={player.age}
                                phone={player.phone}
                                creationDate={player.creationDate.split('T')[0]}
                                idCollective={idActualGame}
                                active={true}
                            />
                })
                :
                <p className='titulo'>{msg}</p>
            }                
            </div>   
        </div>
    )
}
