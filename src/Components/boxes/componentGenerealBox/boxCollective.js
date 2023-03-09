import React from "react";

import './boxCollective.css'

export default function ComponentGeneralBox(props) {

   
    return (
        <div className='body_componentCollective'>
            <div className="boxComponentcollective">
               <p className="titleBox"> {props.title}</p>
            </div>
        </div>
    )
}