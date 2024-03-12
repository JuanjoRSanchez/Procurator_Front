import React from 'react'
import '../../../assets/styles/principal.css'
import FormGame from '../../../Components/forms/formComponentGame/FormComponentGame.js'
import { getActualCollectiveId } from '../../../Services/sessionStorage.service.js'

export default function Newgame() {
    const actualCollective = getActualCollectiveId()

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormGame  idCollective={actualCollective} />
            </div>
       </div>
    )
}
