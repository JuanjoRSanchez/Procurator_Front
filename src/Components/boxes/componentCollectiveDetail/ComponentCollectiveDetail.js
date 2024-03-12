import './componentCollectiveDetail.css'
import '../../../assets/styles/buttons.css'

import { deleteCollectiveById } from '../../../Services/collective.service';
import { Link } from 'react-router-dom';
import MessageComponent from '../../messageComponent/MessageComponent';
import { getActualCollective, getJwt } from '../../../Services/sessionStorage.service';


export default function ComponentCollectiveDetail() {

    let errMsg = false;
    let succes= false;
    const token = getJwt()
    const collective = getActualCollective()
    const date = collective.creationDate.split('T')[0]
    const time = collective.creationDate.split('T', 8)[1].split('.')[0]

    const handleDelete = (e) => {
        e.preventDefault()
        deleteCollectiveById(collective.id, token)
            .then((data) => {
                console.log(data)
                if(data === 400){
                    errMsg = "Collective not deleted correctly"
                    succes = true
                }else{
                    errMsg = "Collective deleted correctly"
                    succes = true
                }
            }).catch((error) => {
                console.log('From component: ' + error)
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
                        <p>Collective name: {collective.name}</p>   
                        <p>Collective Id: {collective.id}</p> 
                    </div>
                    <div>
                        <p>Creation date: {date}</p> 
                        <p>Creation time: {time}</p> 
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

