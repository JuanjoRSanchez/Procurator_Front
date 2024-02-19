import React, { useEffect, useRef } from "react";
import ButtonDetails from "../../button_detail/ButtonsDetails";

import './componentPlayerBox.css'

export default function ComponentPlayerBox(props) {
    const box = useRef(null)

    const entity = 'player'
    const infoEntity = props.idPlayer
    const linkToUpdate = '/updatePlayer/' + props.idPlayer
    const linkToBack = '/players'
    const detail = '/playerDetail'

    const played_Class = 'body_playerComponentBox active';
    const notPlayed_Class = 'body_playerComponentBox not_active'
    const active = props.active
    useEffect(() => {
        
        if(active){
            box.current.className = played_Class
        }else{
            box.current.className = notPlayed_Class
        }
    }, [box, played_Class, notPlayed_Class, active ]);

    return (
            <div ref={box} >
                <div className="playerBoxComponent fontBox">
                    <p>Player name:</p>
                    <p>{props.name}</p>
                </div>
                <div>
                    <ButtonDetails entity={entity} infoEntity={infoEntity} infoEntityAll={props} linkToBack={linkToBack} linkToUpdate={linkToUpdate} detail={detail} />
                </div> 
            </div>
        )
}

