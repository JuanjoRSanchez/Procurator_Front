import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getActualCollective, getActualToken } from '../../../Services/dataAcces'
import { useAuth } from '../../../context/AuthProvider'
import { getFieldsByCollectiveId } from '../../../Services/field.service'
import ComponentFieldDetail from '../../../Components/boxes/componentFieldDetail/ComponentFieldDetail'

export default function Fields(){
    const navigate = useNavigate();

    const context = useAuth()
    if(!context.isLoggedIn){
        navigate("/")
    } 

    const idActualCollective = getActualCollective()
    const token = getActualToken()

    const [fields, setFields ] = useState({})
    const [msg, setMsg] = useState('')

    useEffect(() => {
        getFieldsByCollectiveId(idActualCollective, token).then((data) =>{
            if(data.status === 200){
                if(data.data !== null){
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
                                />
                    })
                    :
                    <p className='titulo'>{msg}</p>
                }
            </div>
        </div>
    )
}