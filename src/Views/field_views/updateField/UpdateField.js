import { useParams } from "react-router-dom"
import FromComponentFieldUpdate from "../../../Components/forms/formComponentFiled/FormComponentFieldUpdate"

export default function UpdateField(){
    const { fieldId } = useParams()
   

    return (
        <div className='body_home'>
            <div className='body_principal'>
               <FromComponentFieldUpdate idField={fieldId} />
            </div>
       </div>
    )
}