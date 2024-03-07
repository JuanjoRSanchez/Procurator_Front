import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteField } from "../../../Services/field.service";
import MessageComponent from "../../messageComponent/MessageComponent";
import { getJwt } from "../../../Services/sessionStorage.service";

export default function ComponentFieldDetail(props) {
    const token = getJwt()
    const [errMsg, setErrMsg] = useState('');
    const [succes, setSucces] = useState(false);

    const handleDeleteField = (e) => {
        e.preventDefault();
        deleteField(props.idField, token)
            .then((data) => {
                if(data.status === 200){
                    setErrMsg("Field deleted correctly.")
                    setSucces(true)
                }else{
                    setErrMsg("Field not deleted.")
                    setSucces(true)  
                }
            }).catch((Error) => {
                console.log(Error)
            })
    }

    return (
        <div>
            {
            succes 
            ?
            <MessageComponent message={errMsg} navi="/fields" />
            :
            null
            }
            <div className='collectiveDetail'>
                <div className="boxComponent ">
                    <div className="fontBox">
                        <p>Field Id: </p>   
                        <p>{props.idField}</p>   
                        <p>Field name:</p>   
                        <p>{props.name}</p>
                        <p>Field phone: </p>   
                        <p>{props.fieldPhone}</p> 
                        <p>Contact phone: </p>   
                        <p>{props.contactPhone}</p> 
                    </div>
                </div>
                <hr/>
                <div className="btn_box">
                    <button onClick={handleDeleteField} className='btn_home'>Delete field</button>
                    <button className='btn_home'><Link to={`/updateField/${props.idField}`}>Update field</Link></button>
                </div>   
            </div>
        </div>            
    )
}

