import { useEffect, useState } from 'react'
import './playersToGame.css'
import { getPlayersNotAddedToGame } from '../../../Services/players.service'
import ComponentPlayerToGameBox from '../../../Components/boxes/componentPlayerToGameBox/ComponentPlayerToGameBox'
import { getActualCollective, getActualGame, getJwt } from '../../../Services/sessionStorage.service'

export default function PlayersToGame(){
    const token = getJwt()
    const idCollective = getActualCollective()
    const actualGame = getActualGame()
    console.log(actualGame)
    const idActualGame = actualGame.idGame

    const [msg, setMsg] = useState('')

    const [players, setPlayers] = useState(null)

    useEffect(() => {  
        getPlayersNotAddedToGame(idActualGame, idCollective, token).then((data) => {
            if(data.length  > 0){
                if(data[0].email){
                    setPlayers(data)                 
                }
            }
            else{
                setMsg(`There are no players left to add in this collective`)
            }
        })
    }, [idActualGame, idCollective, token])

    
    return(
    <div className='body_principal'>   
        <p className='titulo'>Players from this collective</p>
        <hr />                       
        <div className='boxComponent_collective1'>
        {
                players
                ?
                Array.from(players).map((player) => {
                    return <ComponentPlayerToGameBox
                                key={player.id} 
                                idPlayer={player.id}
                                name={player.name} 
                                email={player.email}
                                age={player.age}
                                phone={player.phone}
                                idCollective={idCollective}
                                active={false}
                            />
                })
                :
                <p className='titulo'>{msg}</p>
        }         
        </div>   
    </div>
    )
}