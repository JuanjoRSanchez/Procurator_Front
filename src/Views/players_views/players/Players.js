import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './players.css'
import ComponentPlayerBox from '../../../Components/boxes/componentPlayerBox/ComponentPlayerBox'
import { getPlayersByCollective } from '../../../Services/players.service'

export default function Players(){

    const idActualCollective = JSON.parse(localStorage.getItem('Collective')).id
    const token = localStorage.getItem("jwt")

    const [players, setPlayers ] = useState({})
    const [msg, setMsg] = useState('')

    useEffect(() => {
 
        getPlayersByCollective(idActualCollective, token).then((data) =>{
            if(data){
                //console.log(data)
                setMsg(`You don't have players yet`)
            }else{
                //console.log(data)
                setPlayers(data)
            }
        })
    }, [idActualCollective, token])

    return(
        <div className="body_principal">
            <div className='collective_games'>
                <p className='titulo'>Players</p>
                <div>
                    <Link to={'/newPlayer'} className='btn_showHide'>Add new player</Link>
                </div>
            </div>
            <hr />
            <div className='collective_games'>
                {
                    players
                    ?
                    Array.from(players).map((player) => {
                        return <ComponentPlayerBox
                                    key={player.id} 
                                    idGame={player.id}
                                    name={player.name} 
                                    email={player.email}
                                    age={player.age}
                                    phone={player.phone}
                                    creationDate={player.creationDate.split('T')[0]}
                                    idCollective={idActualCollective}
                                />
                    })
                    :
                    <p className='titulo'>{msg}</p>
                }
            </div>
        </div>
    )
}