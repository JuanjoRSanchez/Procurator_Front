import React, { useEffect, useRef } from "react";

import './componentGameBox.css'
import '../../../assets/styles/principal.css'
import '../../../assets/styles/buttons.css'
import ButtonDetails from "../../button_detail/ButtonsDetails";

export default function ComponentGameBox(props) {
    const box = useRef(null)
    const entity = 'game'
    const infoEntity = props.idGame
    const linkToUpdate = '/updateGame/' + props.idGame
    const linkToBack = '/games'
    const detail = '/gameDetail'
    const played_Class = 'body_gameComponentBox played';
    const notPlayed_Class = 'body_gameComponentBox not_played'
    const gameDate = props.gameDate
    
    useEffect(() => {
        const dateGame = new Date(gameDate);
        const actualDate = new Date()
        if(dateGame < actualDate){
            box.current.className = played_Class
        }else{
            box.current.className = notPlayed_Class
        }
    }, [gameDate, box, played_Class, notPlayed_Class ]);
    
    return (
            <div ref={box} >
                <div className="gameBoxComponent fontBox">
                    <p>Game id: {props.idGame}</p>
                    <p>Game date: {props.gameDate}</p> 
                    <p>Game hour: {props.gameHour}</p> 
                </div> 
                <ButtonDetails entity={entity} infoEntity={infoEntity} linkToBack={linkToBack} linkToUpdate={linkToUpdate} detail={detail} infoEntityAll={props}/>
            </div>
    )
}

