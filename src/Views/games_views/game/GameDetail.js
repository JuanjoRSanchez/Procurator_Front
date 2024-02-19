import React, { useEffect, useState } from "react";


import './gameDetail.css'
import '../../../assets/styles/buttons.css'
import ComponentGameDetail from "../../../Components/boxes/componentGameDetail/ComponentGameDetail";
import { addPlayerToGame } from "../../../Services/players.service";
import { Link } from "react-router-dom";


export default function Game(props) {
    const token = localStorage.getItem("jwt")
    const game = localStorage.getItem('game')
    //const [collectiveStyle, setCollectiveStyle] = useState("boxComponent_collective_oculto")
    //const collectiveStyle = 'boxComponent_collective_visto'

    const [players, setPlayers] = useState({})

    useEffect(() => {
        
    }, [])

    const getPlayers = () => {
        const body = {
            player_id: 3,
            game_id: game.idGame
        }
        addPlayerToGame(body, token).then(() => {

        })
    }
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
                <button onClick={getPlayers} className='btn_showHide'>Add new players</button>
            </div>
            <div className='nuevoBox1' >
                <Link to='/newPlayer'><button  className='btn_showHide'>Add new player</button></Link>
            </div>
            <p className='titulo'>Players added to this game</p>
            <div >
                {
                    players 
                    ? 
                    <ComponentGameDetail />               
                    : 
                    <p>No data found for this game</p>
                }           
            </div>   
            <hr />                       
        </div>
    )
}

/* 

<div className='body_principal'>
    <div className='nuevoBox'>
            <p className='title_component'>{game.gameDate}</p>
    </div>
    <div className='nuevoBox1' >
        <button onClick={showGameDetails} id='btn_show' className='btn_showHide'>Show game details</button>
    </div>
    <div className={collectiveStyle} id='collective_details'>
        {
            game 
            ? 
            <ComponentGameDetail />               
            : 
            <p>No data found for this game</p>
        }           
    </div>   
    <hr />                       
</div>

*/