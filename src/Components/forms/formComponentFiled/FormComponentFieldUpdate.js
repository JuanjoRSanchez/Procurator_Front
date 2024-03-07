import { useEffect, useState } from "react";
import MessageComponent from "../../messageComponent/MessageComponent";
import { updateField } from "../../../Services/field.service";
import { getJwt } from "../../../Services/sessionStorage.service";

export default function FromComponentFieldUpdate(props){
    const token = getJwt()
    const [errMsg, setErrMsg] = useState(false);
    const [succes, setSucces] = useState(false);
    const [fieldName, setFieldName] = useState('');
    const [fieldAddress, setFieldAddress] = useState('');
    const [fieldPhone, setFieldPhone] = useState('')
    const [fieldContactPhone, setFieldContactPhone] = useState('');

    useEffect(() => {

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const field = {
            id: props.idField,
            name: fieldName,
            address: fieldAddress,
            contactPhone: fieldContactPhone
        }
        updateField(field, token)
            .then((value) => {
                    if(value.status === 200){
                        setErrMsg("The field is updated corectly.")
                        setSucces(true)
                    }else{
                        setErrMsg("The field is not updated.")
                        setSucces(true)
                    }
                    
            }).catch((Error) => {
                console.log(Error)
             })
    }

    return(
        <div> 
        {
            succes 
            ?
            <MessageComponent  message={errMsg} navi="/fields"/>
            :
            null
        }
        <div className='form_box'>
            <form className="form" onSubmit={handleSubmit}>
                <div className="titleContainer">
                    <h1 className="title">Fill with the new data</h1>
                </div>
                <div className="inputContainer">
                    <label htmlFor="name" className="label">New field name:</label>
                    <input
                        type="text"
                        id='name'
                        autoComplete='off'
                        onChange={(e) => setFieldName(e.target.value)}
                        value={fieldName}
                        className="input"
                    />
                    <label htmlFor="address" className="label">New field address:</label>
                    <input
                        type="text"
                        id='address'
                        autoComplete='off'
                        onChange={(e) => setFieldAddress(e.target.value)}
                        value={fieldAddress}
                        className="input"
                    />
                    <label htmlFor="contactPhone" className="label">New field contact phone:</label>
                    <input
                        type="text"
                        id='contactPhone'
                        autoComplete='off'
                        onChange={(e) => setFieldPhone(e.target.value)}
                        value={fieldPhone}
                        className="input"
                    />
                    <label htmlFor="contactPhone" className="label">New contact phone:</label>
                    <input
                        type="text"
                        id='contactPhone'
                        autoComplete='off'
                        onChange={(e) => setFieldContactPhone(e.target.value)}
                        value={fieldContactPhone}
                        className="input"
                    />
                </div>
                <div className="btnContainer">
                    <button type="submit" className="submitBtn" value="Actualizar">Save</button>
                </div>
            </form>
        </div>
    </div>
    )

}