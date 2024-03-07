import React from 'react'
import '../../../assets/styles/principal.css'
import FormComponentPlayer from '../../../Components/forms/formComponentPlayer/FormComponentPlayer.js'
import { getActualCollectiveId } from '../../../Services/sessionStorage.service.js'

export default function NewPlayer() {

    const idActualCollective = getActualCollectiveId()

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormComponentPlayer  idCollective={idActualCollective} />
            </div>
       </div>
    )
}
