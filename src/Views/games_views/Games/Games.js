import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import '../../../assets/styles/principal.css'
import './games.css'
import '../../../assets/styles/buttons.css'
import '../../../assets/styles/filtrarPor.css'

import imageArrow from '../../../assets/images/icons8-chevron-abajo-en-círculo-64.png'

import ComponentGameBox from '../../../Components/boxes/componentGameBox/ComponentGameBox.js';
import { getGames } from '../../../Services/games.services.js';
import { orderGamesByMayorDate, orderGamesByMinorDate, showNotPlayedGames, showPlayedGames } from '../../../Services/filters/filterGames';
import { getActualCollectiveId, getActualGame, getJwt } from '../../../Services/sessionStorage.service.js';

export default function Games() {
    const idActualCollective = getActualCollectiveId()
    let token = getJwt()

    const [games, setGames] = useState(null);
    const [message, setMessage] = useState('')
    const filters = document.getElementById('filters')
    if(getActualGame()){
        sessionStorage.removeItem('game')
    }
    useEffect(() => {
        getGames(idActualCollective, token).then((data) => {
            if(data.status){
                setMessage(`You don't have games yet`)
                setGames(null)
            }else{
                setGames(data)
            }
        })
       
    }, [token, idActualCollective]);

    const toggleFilters = () => {
        if(filters.getAttribute('class') === 'filter_options_hide'){
            filters.classList.remove('filter_options_hide')
            filters.classList.add('filter_options_show')
        }else{
            filters.classList.remove('filter_options_show')
            filters.classList.add('filter_options_hide')
        }
    }

    const orderByMinorDate = () => {
        setGames(orderGamesByMinorDate(games))
    }

    const orderByMayorDate = () => {
        setGames(orderGamesByMayorDate(games))
    }

    const showPlayed = () => {
        getGames(idActualCollective, token).then((data) => {
            setGames(showPlayedGames(data))
        })
    }

    const showNotPlayed = () => {
        getGames(idActualCollective, token).then((data) => {
            setGames(showNotPlayedGames(data))
        })
    }

    return (
        <div className='body_principal'>
            <div className='collective_games'>
                <p className='titulo'>Games</p>
                <div>
                    <Link to={'/newGame'} className='btn_showHide'>Add new game</Link>
                </div>
            </div>
            <hr />    
            
            <div className='box_filtro'>
                <div className='filter_title'>
                    <p className='titulo'>Ordenar por: </p>
                </div>
                <img src={imageArrow} className='imageArrow' alt='icono menú'  onClick={toggleFilters}/>
                <div className='filter_options_hide' id='filters'>
                    <button className='filter' onClick={orderByMinorDate}>⇩ Date</button>
                    <button className='filter' onClick={orderByMayorDate}>⇧ Date</button>
                    <button className='filter' onClick={showPlayed}>Played</button>
                    <button className='filter' onClick={showNotPlayed}>Not played</button>
                </div>
            </div>
            <div className='principal_boxComponent'>
            {
                games
                ?
                Array.from(games).map((game) => {
                    return <div className='boxComponent_game' to={`/gameDetail/${game.id}`} key={game.id}   > 
                                    <ComponentGameBox 
                                        key={game.id} 
                                        idGame={game.id}
                                        scoreWhite={game.whiteScore} 
                                        scoreBlack={game.blackScore}
                                        gameCreationDate={game.creationDate.split('T')[0]}
                                        gameDate={game.dateMatch.split(' ')[0]}
                                        gameHour={game.dateMatch.split(' ')[1]}
                                        idCollective={idActualCollective}
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

