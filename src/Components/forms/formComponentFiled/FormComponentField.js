import React, { useState } from 'react';
import MessageComponent from '../../messageComponent/MessageComponent.js';
import { addField } from '../../../Services/field.service.js';
import { getJwt, getActualCollectiveId } from '../../../Services/sessionStorage.service.js';

export default function FormComponentField() {
    const token = getJwt()

    const [fieldName, setFieldName] = useState('');
    const [fieldPhone, setFieldPhone] = useState('');
    const [fieldAddress, setFieldAddress] = useState('');
    const [fieldContatPhone, setFieldContactPhone] = useState('');
    const actualCollective = getActualCollectiveId()

    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const field = {
            name: fieldName,
            address: fieldAddress,
            phone: fieldPhone,
            contactPhone: fieldContatPhone,
            collectiveId: actualCollective
        }
        addField(field, token).then((data) => {
            console.log(data)
            if(data.status === 200){
                setErrMsg("Field added correctly")
                setSucces(true)

            }else{
                setErrMsg("Field not added correctly")
                setSucces(true)
            }
        }).catch((Error) => {
            console.log(Error)
        })
    }

    return (
        <div> 
            {
                succes 
                ?
                <MessageComponent message={errMsg} navi={'/fields'}/>
                :
                null
            }
            <div className='form_box'>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="titleContainer">
                        <h1 className="title">Field information</h1>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="name" className="label">Field name:</label>
                        <input
                            type="text"
                            id='name'
                            autoComplete='off'
                            onChange={(e) => setFieldName(e.target.value)}
                            required
                            className="input"
                        />
                        <label htmlFor="address" className="label">Field address:</label>
                        <input
                            type="text"
                            id='address'
                            autoComplete='off'
                            onChange={(e) => setFieldAddress(e.target.value)}
                            required
                            className="input"
                        />
                        <label htmlFor="name" className="label">Field phone:</label>
                        <input
                            type="text"
                            id='phone'
                            autoComplete='off'
                            onChange={(e) => setFieldPhone(e.target.value)}
                            required
                            className="input"
                        />
                        <label htmlFor="contactPhone" className="label">Field contact phone:</label>
                        <input
                            type="text"
                            id='contactPhone'
                            autoComplete='off'
                            onChange={(e) => setFieldContactPhone(e.target.value)}
                            required
                            className="input"
                        />
                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="submitBtn" value="Actualizar" >Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

