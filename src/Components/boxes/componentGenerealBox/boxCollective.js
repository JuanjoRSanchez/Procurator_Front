import React from "react";

import './boxCollective.css'
import { setActualCollective } from "../../../Services/sessionStorage.service";

export default function ComponentGeneralBox(props) {

    function setActualCollectiveFrom(){
        setActualCollective(props.collective)
    }
    
    return (
        <div className='body_componentCollective' onClick={setActualCollectiveFrom()}>
               <p className="titleBox"> {props.title}</p>
        </div>
    )
}