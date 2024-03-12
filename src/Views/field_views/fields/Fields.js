import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFieldsByCollectiveId } from '../../../Services/field.service'
import ComponentFieldDetail from '../../../Components/boxes/componentFieldDetail/ComponentFieldDetail'
import { getActualCollectiveId, getJwt } from '../../../Services/sessionStorage.service'

export default function Fields(){
   
    const idActualCollective = getActualCollectiveId()
    const token = getJwt()

    const [fields, setFields ] = useState({})
    const [msg, setMsg] = useState('')

    useEffect(() => {
        getFieldsByCollectiveId(idActualCollective, token).then((data) =>{
            if(data.status === 200){
                if(data.data !== null){
                    console.log(data.data)
                    setFields(data.data)
                }else{
                    setMsg(`You don't have players yet`)
                }
            }else{
                setMsg('Error')
            }            
        })
    }, [idActualCollective, token])

    return(
        <div className="body_principal">
            <div className='collective_games'>
                <p className='titulo'>Fields</p>
                <div>
                    <Link to={'/newField'} className='btn_showHide'>Add new field</Link>
                </div>
            </div>
            <hr />
            <div className='collective_games'>
                {
                    fields
                    ?
                    Array.from(fields).map((field) => {
                        return <ComponentFieldDetail
                                    key={field.id} 
                                    idField={field.id}
                                    name={field.name}
                                    fieldPhone={field.phone}
                                    contactPhone={field.contactPhone}

                                />
                    })
                    :
                    <p className='titulo'>{msg}</p>
                }
            </div>
        </div>
    )
}