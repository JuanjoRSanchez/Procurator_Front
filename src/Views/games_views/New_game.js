import React from 'react'
import '../../assets/styles/principal.css'
import { useParams } from 'react-router-dom'
import FormGame from '../../Components/forms/formComponentGame/FormComponentGame.js'

export default function Newgame() {
    const { idCollective } = useParams()
    console.log(idCollective)

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormGame  idCollective={idCollective} />
            </div>
       </div>
    )
}
