import React from 'react'
import { useState, useEffect } from "react";
import '../../../assets/styles/principal.css'
import './collectives.css'
import BoxCollective from '../../../Components/boxes/componentGenerealBox/boxCollective.js';
 
import { Link } from 'react-router-dom'
import { parseJwt } from '../../../Services/token.service';
import { getActualToken } from '../../../Services/dataAcces';
import { getCollectivesByUserEmail } from '../../../Services/collective.service';

export default function Collectives() {
    const [Msg, setMsg] = useState()

    const tokenn = getActualToken()
    let email = parseJwt(tokenn).sub

    const [collectives, setCollectives] = useState({});
    
    useEffect(() => {
        getCollectivesByUserEmail(tokenn, email)
        .then((value) => {
            if(value === 'error'){
                setMsg("No collectives found")
                setCollectives('')
            }else{
                setCollectives(value)
            }
        }) 
        if(localStorage.getItem('Collective')){
            localStorage.removeItem('Collective')
        }
        if(localStorage.getItem('game')){
            localStorage.removeItem('game')
        }
        if(localStorage.getItem('actualPlayer')){
            localStorage.removeItem('actualPlayer')
        }
    }, [tokenn, email]);
    useEffect(() => {
        const actualCollective = localStorage.getItem('actualCollective')
        if(actualCollective){
            localStorage.removeItem('actualCollective')
        }
        
    }, [tokenn, email]);

    return (
        <div className='body_home'>        
                <div className='nuevoBox'>
                    <Link to={'/newCollective'} >Add new collective</Link>
                </div>
                <div className='principal_boxComponent'>
                    {
                        collectives
                        ?
                        Array.from(collectives).map((collective) => { 
                            return <Link className='boxComponent_collective' key={collective.id} to={`/collectiveDetail/${collective.id}`}>
                                        <BoxCollective key={collective.id} title={collective.name} idCollective={collective.id} />
                                   </Link>;
                        })
                        :
                        <p>{Msg}</p> 
                    }              
                </div>     
        </div>
    )
}
