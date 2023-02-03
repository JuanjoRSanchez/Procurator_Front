import React from "react";

import './componentBox.css'

export default function ComponentGeneralBox(props) {

   
    return (
        <div className='body_componentBox'>
            <div className="boxComponent">
                {props.name}
            </div>
        </div>
    )
}