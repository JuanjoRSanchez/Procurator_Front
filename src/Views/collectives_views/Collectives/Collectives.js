import React from 'react'
import { useState, useEffect } from "react";
import '../../../assets/styles/principal.css'
import './collectives.css'
//import AuthContext from '../../../context/AuthProvider';
import BoxCollective from '../../../Components/boxes/componentGenerealBox/boxCollective.js';
 
import { Link } from 'react-router-dom'
import { getAllCollectives } from '../../../Services/collective.service';
import { parseJwt } from '../../../Services/token.service';

export default function Collectives() {

    const [Msg, setMsg] = useState()

    const tokenn = localStorage.getItem('jwt')
    const email = parseJwt(tokenn).sub

    const [collectives, setCollectives] = useState({});
    
    useEffect(() => {
        getAllCollectives(tokenn, email)
        .then((value) => {
            if(value === 'error'){
                setMsg("No collectives found")
                setCollectives('')
            }else{
                setCollectives(value)
            }
        }) 
        
        
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
                            
                            return <Link key={collective.id} to={`/collectiveDetail/${collective.name}`}>
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
