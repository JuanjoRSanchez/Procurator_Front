import React from 'react'
import '../../../assets/styles/principal.css'
import FormGame from '../../../Components/forms/formComponentGame/FormComponentGame.js'
import { getActualCollective } from '../../../Services/dataAcces'

export default function Newgame() {
    const actualCollective = getActualCollective()

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormGame  idCollective={actualCollective} />
            </div>
       </div>
    )
}
