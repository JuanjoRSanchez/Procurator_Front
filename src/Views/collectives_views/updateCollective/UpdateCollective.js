import React from 'react'
import '../../../assets/styles/principal.css'

import FormComponentCollectiveUpdate from '../../../Components/forms/formComponentCollective/FormComponentColletiveUpdate.js'
import { getActualCollective } from '../../../Services/dataAcces'

export default function UpdateCollective() {
    const actualCollective = getActualCollective()

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormComponentCollectiveUpdate  idCollective={actualCollective} />
            </div>
       </div>
    )
}
