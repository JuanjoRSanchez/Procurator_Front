import React from 'react'
import '../../../assets/styles/principal.css'

import { useParams } from 'react-router-dom'
import FormComponentCollectiveUpdate from '../../../Components/forms/formComponentCollective/FormComponentColletiveUpdate.js'

export default function UpdateCollective() {
    const { idCollective } = useParams()
    console.log(idCollective)

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormComponentCollectiveUpdate  idCollective={idCollective} />
            </div>
       </div>
    )
}
