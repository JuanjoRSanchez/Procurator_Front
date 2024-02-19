import React from 'react'
import '../../../assets/styles/principal.css'
import FormComponentPlayer from '../../../Components/forms/formComponentPlayer/FormComponentPlayer.js'

export default function NewPlayer() {

    const idActualCollective = JSON.parse(localStorage.getItem('Collective')).id

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormComponentPlayer  idCollective={idActualCollective} />
            </div>
       </div>
    )
}
