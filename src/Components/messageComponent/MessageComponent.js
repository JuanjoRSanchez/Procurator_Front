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
    const actualCollective = localStorage.getItem('actualCollective')
    const redirection = (e) => {
        e.preventDefault()
        console.log(prop.navi)
        if(prop.navi === '/collectiveDetail/'){
            navigate(prop.navi + actualCollective)
        }if (prop.navi === '/collectives') {
            navigate(prop.navi)
        }
        else{
            window.location.reload()
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
