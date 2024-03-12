import React from 'react'
import { useState, useEffect } from "react";

import '../../../assets/styles/principal.css'
import './collectives.css'
import BoxCollective from '../../../Components/boxes/componentGenerealBox/boxCollective.js';
 
import { Link, useNavigate } from 'react-router-dom'
import { getCollectivesByUserEmail } from '../../../Services/collective.service';
import { logout } from '../../../Services/auth/auth.services.js';
import { useAuth } from '../../../context/AuthProvider.js';

export default function Collectives() {
    const navigate = useNavigate();

    const context = useAuth()   

    const [Msg, setMsg] = useState()
    const tokenn = context.jwt
    let email = context.userEmail
    const [collectives, setCollectives] = useState({});
    
    useEffect(() => {
       
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
                            return <Link className='boxComponent_collective' key={collective.id} to={`/collectiveDetail/${collective.id}` }>
                                        <BoxCollective key={collective.id} title={collective.name} idCollective={collective.id} collective={collective}/>
                                   </Link>;
                        })
                        :
                        <p>{Msg}</p> 
                    }              
                </div>     
        </div>
    )
}
