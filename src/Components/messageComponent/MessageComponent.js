import React from 'react'
import './messageComponent.css'
import { useNavigate } from 'react-router-dom'

export default function MessageComponent(prop) {
    const navigate = useNavigate();
    let messageBox_class = 'box_message'
    let messageClass = 'btn_alert_ok'
    if(prop.message.includes('not')){
        messageClass = 'btn_alert_notOk'
        messageBox_class = 'box_message_notOk'
    }
    const collectiveId = JSON.parse(localStorage.getItem('Collective')).id
    const redirection = (e) => {
        e.preventDefault()
        if(prop.navi === null){
            navigate(prop.navi)
        }else if(prop.navi === '/collectives'){
            navigate(prop.navi)
        }else if(prop.navi === '/games'){
            navigate(prop.navi + '/' + collectiveId)
        }else if(prop.navi === '/players'){
            navigate(prop.navi)
        }
        else {
            navigate(prop.navi + '/' + collectiveId)
        }
    }

    return (
            <div className={messageBox_class}>
                <div>
                    <p>{prop.message}</p>
                </div>
                <button onClick={redirection} className={messageClass}>Accept</button>
            </div>
    )
}
