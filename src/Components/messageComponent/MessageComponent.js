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
    const redirect = () => {
        navigate("/collectives");
    }
    return (
            <div className={messageBox_class}>
                <div>
                    <p>{prop.message}</p>
                </div>
                <button onClick={redirect} className={messageClass}>Accept</button>
            </div>
    )
}
