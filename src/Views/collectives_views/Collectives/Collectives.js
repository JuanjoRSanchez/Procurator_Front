import React from 'react'
import {useContext, useState, useEffect } from "react";
import '../../../assets/styles/principal.css'
import './collectives.css'
import axios from 'axios';
import BoxCollective from '../../../Components/boxes/componentGenerealBox/boxCollective.js';
import  AuthContext  from '../../../context/AuthProvider.js'
 
import { Link, useNavigate } from 'react-router-dom'

export default function Collectives() {
    const navigate = useNavigate()
    const { auth } = useContext(AuthContext)
    useEffect(() => {
        if(!auth){
            navigate('/mierda')
        }
    });

    const baseURL = "http://localhost:9011/api/v1/collectives/getAll";
    const userEmail = localStorage.getItem("userEmail");
    let token = localStorage.getItem("jwt");

    const [collectives, setCollectives] = useState({});
    useEffect(() => {
        let user = {
            email: userEmail
        }  
        axios({
            method: 'POST',
            url: baseURL,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data: user
            })
            .then((response) => {
                setCollectives(response.data);
            }
            ).catch((error) => {
                console.log(error);
            });  
        }, [baseURL, token, userEmail]);

    return (
        <div className='body_home'>        
                <div className='nuevoBox'>
                    <Link to={'/newCollective'} >Add new collective</Link>
                </div>
                <div className='principal_boxComponent'>
                    {
                        Array.from(collectives).map((collective) => {
                            return <Link key={collective.id} to={`/collectiveDetail/${collective.name}`}>
                                        <BoxCollective key={collective.id} title={collective.name} />
                                   </Link>;
                        })
                    }              
                </div>     
        </div>
    )
}
