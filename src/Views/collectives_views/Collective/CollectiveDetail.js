import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'

import ComponentCollectiveDetail from '../../../Components/boxes/componentCollectiveDetail/ComponentCollectiveDetail.js';

import '../../../assets/styles/principal.css'
import './collectiveDetail.css'
import '../../../assets/styles/buttons.css'
import { getActualCollective } from '../../../Services/sessionStorage.service.js';

export default function CollectiveDetail(props) {
    const [collectiveStyle, setCollectiveStyle] = useState("boxComponent_collective_oculto")
    let collective = {};
    
    const showCollectiveDetails = (e) => {
        e.preventDefault()
        let btn = document.getElementById('btn_show')
        if(collectiveStyle === 'boxComponent_collective_oculto'){
            setCollectiveStyle('boxComponent_collective_visto')
            btn.innerHTML = 'Hide details'
        }else{
            setCollectiveStyle('boxComponent_collective_oculto')
            btn.innerHTML = 'Show details'
        }

    }
    
    collective = getActualCollective()

    return (
        <div className='body_principal'>
            <div className='nuevoBox'>
                    <p className='title_component'>{collective.name}</p>
            </div>
            <div className='nuevoBox1' >
                 <button onClick={showCollectiveDetails} id='btn_show' className='btn_showHide'>Show details</button>
            </div>
            <div className={collectiveStyle} id='collective_details'>
                {
                    collective 
                    ? 
                    <ComponentCollectiveDetail 
                    />               
                    : 
                    <p>No data found for {collective.name} collective</p>
                }           
            </div>   
            <hr />           
            <div className='caja'>
                <div className='caja-sub1'>
                    <Link to={'/games'} className='anchor'>Games</Link>
                </div>
                <div className='caja-sub1'>
                    <Link to={'/players'} className='anchor'>Players</Link>
                </div>

                <div className='caja-sub1'>
                    <Link to={'/fields'} className='anchor'>Fields</Link>
                </div>
            </div>
        </div>
    )
}

