import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'

import ComponentCollectiveDetail from '../../../Components/boxes/componentCollectiveDetail/ComponentCollectiveDetail.js';

import '../../../assets/styles/principal.css'
import './collectiveDetail.css'
import '../../../assets/styles/buttons.css'
import axios from 'axios';
import ComponentGameBox from '../../../Components/boxes/componentGameBox/ComponentGameBox.js';

export default function CollectiveDetail() {
    const { collectiveName } = useParams();
    

    const [collectiveStyle, setCollectiveStyle] = useState("boxComponent_collective_oculto")
    const baseURL = "http://localhost:9011/api/v1/collectives/getCollective";
    const userEmail = localStorage.getItem("userEmail");
    let token = localStorage.getItem("jwt");

    const [collective, setCollective] = useState({});
    const [dateCreation, setDateCreation] = useState("");
    const [timeCreation, setTimeCreation] = useState("");
    const [collectiveId, setCollectiveId] = useState("");
    const [games, setGames] = useState({});

    useEffect(() => {
        let body = {
            email: userEmail,
            name: collectiveName
        }  
        axios({
            method: 'POST',
            url: baseURL,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data: body
            })
            .then((response) => {
                setCollective(response.data);
                setCollectiveId(response.data.id)
                setDateCreation(response.data.creationDate.split("T")[0])
                setTimeCreation(response.data.creationDate.split("T")[1].split(".")[0])
            }
            ).catch((error) => {
                console.log(error);
            });  
            
    }, [baseURL, token, userEmail, collectiveName]);
 
    const handleGetGames = (e) => {
        e.preventDefault();
        axios({
            method: 'GET',
            url: "http://localhost:9011/api/v1/games/getGames/" + collectiveId,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            })
            .then((response) => {
                setGames(response.data)
            }
            ).catch((error) => {
                console.log(error.response.status);
            });  
    }

    const showCollectiveDetails = (e) => {
        e.preventDefault()
        let btn = document.getElementById('btn_show')
        if(collectiveStyle === 'boxComponent_collective_oculto'){
            setCollectiveStyle('boxComponent_collective_visto')
            btn.innerHTML = 'Hide collective details'
        }else{
            setCollectiveStyle('boxComponent_collective_oculto')
            btn.innerHTML = 'Show collective details'
        }

    }
    return (
        <div className='body_principal'>
            <div className='nuevoBox'>
                    <p className='title_component'>{collectiveName}</p>
            </div>
            <div className='nuevoBox1' >
                 <button onClick={showCollectiveDetails} id='btn_show' className='btn_showHide'>Show collective details</button>
            </div>
            <div className={collectiveStyle} id='collective_details'>
                {
                    collective 
                    ? 
                    <ComponentCollectiveDetail 
                    collectiveId={collectiveId} 
                    collectiveName={collectiveName}
                    dateCreation={dateCreation}
                    timeCreation={timeCreation}
                    />               
                    : 
                    <p>No data found for {collectiveName} collective</p>
                }           
            </div>   
            <hr /> 
            <div className='collective_games'>
                <p className='titulo'>Games</p>
                <div className='caja'>
                    <Link to={`/newGame/${collectiveId}`} className='btn_showHide'>Add new game</Link>
                </div>
            </div>
            <hr />
            <div className='caja'>
                <button className='btn_showHide' onClick={handleGetGames}>Shows Games</button>
            </div>
            <div className='collective_games'>
                {
                    games
                    ?
                    Array.from(games).map((game) => {
                        return <ComponentGameBox 
                        key={game.id} 
                        idGame={game.id}
                        scoreWhite={game.whiteScore} 
                        scoreBlack={game.blackScore}
                        gameCreationDate={game.creationDate.split('T')[0]}
                        gameDate={game.dateMatch.split(' ')[0]}
                        gameHour={game.dateMatch.split(' ')[1]}
                        />
                            
                    })
                    :
                    <p>No hay partidos</p> 
                }                      
            </div>
        </div>
    )
}

