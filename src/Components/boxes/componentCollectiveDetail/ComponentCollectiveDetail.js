import './componentCollectiveDetail.css'
import '../../../assets/styles/buttons.css'

import { deleteCollectiveById } from '../../../Services/collective.service';
import { Link } from 'react-router-dom';
import MessageComponent from '../../messageComponent/MessageComponent';
import { useState } from 'react';
import { getJwt } from '../../../Services/sessionStorage.service'


export default function ComponentCollectiveDetail(props) {

    const token = getJwt()
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault()
        deleteCollectiveById(props.collectiveId, token)
            .then((data) => {
                if(data === 400){
                    setErrMsg("Collective not deleted correctly")
                    setSucces(true)
                }else{
                    setErrMsg("Collective deleted correctly")
                    setSucces(true)  
                }
            }).catch((error) => {
                console.log(error)
            })
    }


    return (
        <>
            {
            succes 
            ?
            <MessageComponent message={errMsg} navi={'/collectives'}/>
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
                <div>
                    <div className="btn_box">
                        <button onClick={handleDelete} className='btn_home'>Delete Collective</button>
                        <button className='btn_home'><Link to={`/updateCollective`}>Update Collective</Link></button>
                    </div> 
                </div>
            </div> 
        </>
    
    )
}

