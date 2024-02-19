// import React, { useState } from "react";
// import { Link } from "react-router-dom";

import './componentCollectiveDetail.css'
import '../../../assets/styles/buttons.css'

import ButtonDetails from "../../button_detail/ButtonsDetails";

export default function ComponentCollectiveDetail(props) {

    const userEmail = localStorage.getItem("userEmail");
    const body1 = {
        email:userEmail,
        name:props.collectiveName
    }

    const entity = 'collective'
    const infoEntity = body1
    const linkToUpdate = '/updateCollective/' + props.collectiveId
    const linkToBack = '/collectives'
    return (
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
                <ButtonDetails entity={entity} infoEntity={infoEntity} linkToBack={linkToBack} linkToUpdate={linkToUpdate} />
            </div> 
    )
}


/*
<div className="btn_box">
    <button entity='collective' className='btn_home'>Delete Collective</button>
    <button className='btn_home'><Link to={`/updateCollective/${props.collectiveId}`}>Update Collective</Link></button>
</div> 

<div className="btn_box">
    <button onClick={handleDelete} className='btn_home'>Delete Collective</button>
    <button className='btn_home'><Link to={`/updateCollective/${props.collectiveId}`}>Update Collective</Link></button>
</div> 


  {
                succes 
                ?
                <MessageComponent message={errMsg} navi='/collectives'/>
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
                    <button className='btn_home'><Link to={`/updateCollective/${props.collectiveId}`}>Update Collective</Link></button>
                </div>   
            </div>
*/