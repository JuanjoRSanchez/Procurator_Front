import React, { useState } from "react";
import { deleteCollective } from "../../../Services/collective.service";

import './componentCollectiveDetail.css'
import '../../../assets/styles/buttons.css'

import MessageComponent from "../../messageComponent/MessageComponent";

export default function ComponentCollectiveDetail(props) {

    const userEmail = localStorage.getItem("userEmail");
    const token = localStorage.getItem("jwt") 

    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();
        const body = {
            email:userEmail,
            name:props.collectiveName
        }
        /*
        const response = deleteCollective(body, token);
        console.log(response)
        if(response === 200){
            console.log("borrado")
            setErrMsg("The collective is saved corectly")
            setSucces(true)
        }else{
            setErrMsg("The collective is not deleted correctly")
            setSucces(true)
        }
        */
        deleteCollective(body, token)
        .then((value) => {
            /*
            if(value === 200){
                setErrMsg("The collective is not deleted correctly")
                setSucces(true)
            }else{
                setErrMsg("The collective is deleted corectly")
                setSucces(true)
            }
            */
            if(value === 200){
                setErrMsg("The collective is deleted corectly")
                setSucces(true)
            }else{
                setErrMsg("The collective is not deleted correctly")
                setSucces(true)
            }
            
        })       
    }
   
    return (
        <>
            {
                succes 
                ?
                <MessageComponent message={errMsg} />
                :
                null
            }
            <div className='collectiveDetail'>
                <div className="boxComponent">
                    <div>
                        <p>Collective name: {props.collectiveName}</p>   
                        <p>Collective Id: {props.collectiveId}</p> 
                    </div>
                    <div>
                        <p>Creation date: {props.dateCreation}</p> 
                        <p>Creation time: {props.timeCreation}</p> 
                    </div>
                </div>
                <hr/>
                <div className="btn_box">
                    <button onClick={handleDelete} className='btn_home'>Delete Collective</button>
                    <button className='btn_home'>Update Collective</button>
                </div>   
            </div>
            
        </>
    )
}