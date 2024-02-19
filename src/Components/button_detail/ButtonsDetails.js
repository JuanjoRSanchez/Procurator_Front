import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteCollective } from "../../Services/collective.service";
import { deleteGame } from "../../Services/games.services";
import { deletePlayer } from "../../Services/players.service"
import MessageComponent from "../messageComponent/MessageComponent";
  
import '../../assets/styles/buttons.css'

export default function ButtonDetails(props) {
    const [succes, setSucces] = useState(false);
    const [errMsg, setErrMsg] = useState(false);

    const token = localStorage.getItem("jwt");
    const entity = props.entity
    const infoEntity = props.infoEntity
    const linkToUpdate = props.linkToUpdate
    const linkToBack = props.linkToBack
    let detail = null
    props.detail ? detail = props.detail : detail = null
 
    const handleDelete = () => {
        if(entity === 'collective'){
            deleteCollective(infoEntity, token).then((response) => {
                console.log(response)
                if(response === '200'){
                    setErrMsg("The collective is deleted corectly")
                    setSucces(true)
                }else{
                    setErrMsg("The collective is not deleted correctly")
                    setSucces(true)
                }         
            })  
        }else if(entity === 'game'){
            deleteGame(infoEntity, token).then((response) => {
                if(response === '200'){
                    setErrMsg("The collective is deleted corectly")
                    setSucces(true)
                    localStorage.removeItem('game')
                }else{
                    setErrMsg("The collective is not deleted correctly")
                    setSucces(true)
                }         
            })  
        }else if(entity === 'player'){
            deletePlayer(infoEntity, token).then((response) => {
                if(response === '200'){
                    setErrMsg("The collective is deleted corectly")
                    setSucces(true)
                }else{
                    setErrMsg("The collective is not deleted correctly")
                    setSucces(true)
                }         
            })  
        } 
    }
   
    return(
        <>
            {
                succes 
                ?
                <MessageComponent message={errMsg} navi={linkToBack}/>
                :
                null
            }
            <div className="btn_box">
                {
                    detail
                    ?
                    <button className='btn_home'><Link to={detail}>Detail {entity}</Link></button>
                    :
                    null
                }
                <button onClick={handleDelete} className='btn_home'>Delete {entity}</button>
                <button className='btn_home'><Link to={linkToUpdate}>Update {entity}</Link></button>
            </div>   
        </>
    )
}

/*
props
1º 
entity = 
link = 
text delete = Delete Colective
              Delete Game
              Delete Player
text update = Update 



 {
                succes 
                ?
                <MessageComponent message={errMsg} navi='/collectives'/>
                :
                null
            }
*/
