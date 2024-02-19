import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'

import '../../../assets/styles/principal.css'
import './games.css'
import '../../../assets/styles/buttons.css'
import '../../../assets/styles/filtrarPor.css'

import imageArrow from '../../../assets/images/icons8-chevron-abajo-en-círculo-64.png'

import ComponentGameBox from '../../../Components/boxes/componentGameBox/ComponentGameBox.js';
import { getGames } from '../../../Services/games.services.js';
import { showNotPlayedGames, showPlayedGames } from '../../../Services/filters/filterGames';

export default function Games() {
    const { idCollective } = useParams();
    const idActualCollective = JSON.parse(localStorage.getItem('Collective')).id
    let token = localStorage.getItem("jwt");

    const [games, setGames] = useState(null);
    const [message, setMessage] = useState('')
    const filters = document.getElementById('filters')
    
    useEffect(() => {
        getGames(idActualCollective, token).then((data) => {
            if(data.status){
                setMessage(`You don't have games yet`)
                setGames(null)
            }else{
                setGames(data)
            }
        })
        if(localStorage.getItem('game')){
            localStorage.removeItem('game')
        }
    }, [token, idActualCollective]);

    const saveGameData = (game) => {
        const actualGame = {
            idGame : game.id,
            scoreWhite : game.whiteScore,
            scoreBlack : game.blackScore,
            gameCreationDate : game.creationDate.split('T')[0],
            gameDate : game.dateMatch.split(' ')[0],
            gameHour : game.dateMatch.split(' ')[1],
            idCollective : idCollective
        }
        window.localStorage.setItem('game', JSON.stringify(actualGame))
    }

    const toggleFilters = () => {
        if(filters.getAttribute('class') === 'filter_options_hide'){
            filters.classList.remove('filter_options_hide')
            filters.classList.add('filter_options_show')
        }else{
            filters.classList.remove('filter_options_show')
            filters.classList.add('filter_options_hide')
        }
    }
    
    const orderGamesByMinorDate = () => {
        setGames(orderGamesByMayorDate(games))
    }

    const orderGamesByMayorDate = () => {
        setGames(orderGamesByMayorDate(games))
    }

    const showPlayed = () => {
        setGames(showPlayedGames(games))
    }

    const showNotPlayed = () => {
        setGames(showNotPlayedGames(games))
    }
/*
    const orderGamesByascendentID = () => {
        setGames(games.sort(
        (objA, objB) => objA.id - objB.id,
        ))
        console.log('result')
        console.log(games)
      
    }
*/
    return (
        <div className='body_principal'>
            <div className='collective_games'>
                <p className='titulo'>Games</p>
                <div>
                    <Link to={`/newGame/${idCollective}`} className='btn_showHide'>Add new game</Link>
                </div>
            </div>
            <hr />    
            
            <div className='box_filtro'>
                <div className='filter_title'>
                    <p className='titulo'>Ordenar por: </p>
                </div>
                <img src={imageArrow} className='imageArrow' alt='icono menú'  onClick={toggleFilters}/>
                <div className='filter_options_hide' id='filters'>
                    <button className='filter' onClick={orderGamesByMinorDate}>⇩ Date</button>
                    <button className='filter' onClick={orderGamesByMayorDate}>⇧ Date</button>
                    <button className='filter' onClick={showPlayed}>Played</button>
                    <button className='filter' onClick={showNotPlayed}>Not played</button>
                </div>
            </div>
            <div className='principal_boxComponent'>
            {
                games
                ?
                Array.from(games).map((game) => {
                    return <div className='boxComponent_game' to={'/gameDetail'} key={game.id}  onClick={saveGameData(game)} > 
                                    <ComponentGameBox 
                                        key={game.id} 
                                        idGame={game.id}
                                        scoreWhite={game.whiteScore} 
                                        scoreBlack={game.blackScore}
                                        gameCreationDate={game.creationDate.split('T')[0]}
                                        gameDate={game.dateMatch.split(' ')[0]}
                                        gameHour={game.dateMatch.split(' ')[1]}
                                        idCollective={idCollective}
                                    />
                            </div>
                })
                :
                <p className='nuevoBox title_empty'>{message}</p> 
                }          
            </div>
            <p className='title_empty'>{message}</p> 
        </div>
    )
}

