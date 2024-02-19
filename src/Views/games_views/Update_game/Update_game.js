import React from 'react'
import '../../../assets/styles/principal.css'
import { useParams } from 'react-router-dom'
import FormUpdateGame from '../../../Components/forms/formComponentGame/formComponentUpdateGame.js'

export default function Updategame() {
    const { idGame } = useParams()
    console.log(idGame)

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormUpdateGame  idGame={idGame}/>
            </div>
       </div>
    )
}
