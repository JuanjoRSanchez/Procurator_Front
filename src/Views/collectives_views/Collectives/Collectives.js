import React from 'react'
import { useState, useEffect } from "react";
import '../../../assets/styles/principal.css'
import './collectives.css'
import BoxCollective from '../../../Components/boxes/componentGenerealBox/boxCollective.js';
 
import { Link, useNavigate } from 'react-router-dom'
import { parseJwt } from '../../../Services/token.service';
import { getActualCollective, getActualGame, getActualPlayer, getJwt } from '../../../Services/sessionStorage.service.js';
import { getCollectivesByUserEmail } from '../../../Services/collective.service';
import { logout } from '../../../Services/auth/auth.services.js';

export default function Collectives() {

    const navigate = useNavigate();
    const [Msg, setMsg] = useState()

    const tokenn = getJwt()
    let email = parseJwt(tokenn).sub

    const [collectives, setCollectives] = useState({});
    
    useEffect(() => {

        const actualCollective = getActualCollective()
        if(actualCollective){
            sessionStorage.removeItem('actualCollective')
        }

        getCollectivesByUserEmail(tokenn, email)
        .then((value) => {
            if(value === 'error'){
             
                setMsg("No collectives found")
                setCollectives('')
                logout()
                navigate("/")
            }else{
                setCollectives(value)
            }
        }) 
        if(getActualCollective('Collective')){
            sessionStorage.removeItem('Collective')
        }
        if(getActualGame('game')){
            sessionStorage.removeItem('game')
        }
        if(getActualPlayer('actualPlayer')){
            sessionStorage.removeItem('actualPlayer')
        }
        
    }, [tokenn, email, navigate]);

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
