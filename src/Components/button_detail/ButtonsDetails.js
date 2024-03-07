import { Link } from "react-router-dom";
import '../../assets/styles/buttons.css'
import { setActualGame, setActualPlayer } from "../../Services/sessionStorage.service";

export default function ButtonDetails(props) {
    
    const entity = props.entity
    let detail = null
    props.detail ? detail = props.detail : detail = null

    const saveActualPlayer = () => {
        setActualPlayer(props.infoEntityAll)
    }
    const saveActualGame = () => {
        setActualGame(props.infoEntityAll)
    }
    return(
        <>
            <div className="btn_box">
                {
                    detail
                    ?
                        entity === 'game'
                        ?
                        <button onClick={saveActualGame} className='btn_home'><Link to={detail}>Detail {entity}</Link></button>
                        :
                        <button onClick={saveActualPlayer} className='btn_home'><Link to={detail}>Detail {entity}</Link></button>
                    :
                    null
                }
            </div>   
        </>
    )
}
