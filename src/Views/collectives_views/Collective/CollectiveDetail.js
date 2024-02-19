import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'

import ComponentCollectiveDetail from '../../../Components/boxes/componentCollectiveDetail/ComponentCollectiveDetail.js';

import '../../../assets/styles/principal.css'
import './collectiveDetail.css'
import '../../../assets/styles/buttons.css'
import { getCollectivesByUserEmailAndName } from '../../../Services/collective.service.js';

export default function CollectiveDetail() {
    const { collectiveName } = useParams();

    const [collectiveStyle, setCollectiveStyle] = useState("boxComponent_collective_oculto")
    const userEmail = localStorage.getItem("userEmail");
    let token = localStorage.getItem("jwt");

    const [collective, setCollective] = useState({});
    const [dateCreation, setDateCreation] = useState("");
    const [timeCreation, setTimeCreation] = useState("");
    const [collectiveId, setCollectiveId] = useState("");
 

    useEffect(() => {
        let body = {
            email: userEmail,
            name: collectiveName
        }  

        getCollectivesByUserEmailAndName(body, token).then((data) => {
            if(data !== 'error'){
                setCollective(data);
                setCollectiveId(data.id)
                setDateCreation(data.creationDate.split("T")[0])
                setTimeCreation(data.creationDate.split("T")[1].split(".")[0])
                localStorage.setItem('Collective', JSON.stringify(data))
            }else{
                console.log(data);
            }
        })
            
    }, [token, userEmail, collectiveName]);


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
            <div className='caja'>
                <Link to={`/games/${collectiveId}`} className='btn_showHide'>Games</Link>
                <Link to={'/players'} className='btn_showHide'>Players</Link>
            </div>
            
        </div>
    )
}

