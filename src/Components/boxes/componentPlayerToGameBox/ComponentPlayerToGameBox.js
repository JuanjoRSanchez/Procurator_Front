import React, { useEffect, useState } from "react";
import { addPlayerToGame, deletePlayerFromGame } from "../../../Services/players.service";
import { getActualIdGame } from "../../../Services/sessionStorage.service";
import './componentPlayerToGameBox.css'
import { useNavigate } from "react-router-dom";

export default function ComponentPlayerToGameBox(props) {
    const navigate = useNavigate();

    const idActualGame = getActualIdGame()
    const token = localStorage.getItem("jwt")

    const activePlayerClass = 'body_playerToGameComponentBox active'
    const notActivePlayerclass = 'body_playerToGameComponentBox not_active'
    const [classElement, setClassElement] = useState() 

    const [InOrOut, setInOrOut] = useState(true)

    useEffect(() => {
        setInOrOut(props.active)
        if(InOrOut){
            setClassElement(activePlayerClass)
        }else{
            setClassElement(notActivePlayerclass)
        }
    }, [activePlayerClass, notActivePlayerclass, InOrOut, props.active])
    const body = {
        player_id: props.idPlayer,
        game_id: idActualGame,
        addedToGame: true
    }
    const addToGame = () => {
        console.log(body)
        addPlayerToGame(body, token).then((data) => {
            if(data.status === 200){
                setInOrOut(data)
            }else{
                console.log("Error")
            }
        })
        navigate('/addPlayerToGame')
    }

    const takeOutPlayer = () => {
        deletePlayerFromGame(idActualGame, props.idPlayer, token).then((data) => {
            if(data !== ''){
                setInOrOut(data)
            }else{
                console.log(`You don't have players yet`)
            }
        })
        document.location.reload()
    }
    return (
        <div id='ele' className={classElement} >
            <div className="gameBoxComponent">
                <p>Player name: {props.name}</p> 
                <p>Player id: {props.idPlayer}</p>
            </div> 
            <div >
                {
                    InOrOut
                    ?
                    <button className="btn_home" onClick={takeOutPlayer}>Get out of the game</button>
                    :
                    <button  className='btn_home' onClick={addToGame}>Add to game</button>
                }
            </div>
        </div>
           
    )
}

