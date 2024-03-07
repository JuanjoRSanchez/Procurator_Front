import React from 'react'
import '../../../assets/styles/principal.css'

import FormComponentCollectiveUpdate from '../../../Components/forms/formComponentCollective/FormComponentColletiveUpdate.js'
import { getActualCollectiveId } from '../../../Services/sessionStorage.service.js'

export default function UpdateCollective() {
    const actualCollective = getActualCollectiveId()

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FormComponentCollectiveUpdate  idCollective={actualCollective} />
            </div>
       </div>
    )
}
