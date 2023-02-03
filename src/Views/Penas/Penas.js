import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../../Components/header/Header'
import Footer from '../../Components/footer/Footer'
import './penas.css'
import ComponentGeneralBox from '../../Components/componentGenerealBox/ComponentGeneralBox.js';
import { Link } from 'react-router-dom'


export default function Penas() {
    const userEmail = localStorage.getItem("userEmail");
    let token = localStorage.getItem("jwt");

    const baseURL = "http://localhost:9011/api/v1/collectives/getAll";
    const [penas, setPenas] = useState({});
    //const [succes, setSucces] = useState(false);
      
    useEffect(() => {
        let user = {
            email: userEmail
        }  
       // const getFunction = () => {
                /*axios.get(baseURL, user, 
                {
                headers: {
                            'Authorization': `Bearer  + ${token}`,
                            'Content-Type': 'application/json'
                            }
                    // headers: {'Authorization': 'Bearer ' + token},
                })
                */
            
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
                setPenas(response.data);
                //setSucces(true)               
            }
            ).catch((error) => {
                console.log(error);
                //setSucces(false);
            });  
        
            
        //getFunction();
        }, [baseURL, token, userEmail]);
    return (
        <div className='body_principal'>
            <Header />
            <div className='body_principal'>
                <div className='nuevoBox'>
                    <Link to={`inicio/penaDetalleGate/nuevaPena/${userEmail}`} >Añadir nueva Peña</Link>
                </div>
                <div className='principal_boxComponent'>
                    {Array.from(penas).map((pena, index) => {
                        return <Link to={`/inicio/penaDetalleGate/penaDetalle/${pena.name}`}>
                            <ComponentGeneralBox key={index} title={pena.name} />
                            <p>{pena.name}</p>
                        </Link>;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

/* 
{penas.map((pena, index) => {
    return <Link to={`/inicio/penaDetalleGate/penaDetalle/${pena.id}`}>
        <ComponentGeneralBox key={index} title={pena.nombre} />
    </Link>;
})}
*/