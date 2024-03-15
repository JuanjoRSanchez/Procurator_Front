import React from "react";

import './boxCollective.css'
import '../../../assets/styles/buttons.css'
import { setActualCollective } from "../../../Services/sessionStorage.service";

export default function ComponentGeneralBox(props) {

    function setActualCollectiveFrom(){
        setActualCollective(props.collective)
    }
    
    return (
        <div className='anchor' onClick={setActualCollectiveFrom()}>
               <div className="titleBox"> {props.title}</div>
        </div>
    )
}