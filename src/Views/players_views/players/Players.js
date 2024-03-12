import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './players.css'
import ComponentPlayerBox from '../../../Components/boxes/componentPlayerBox/ComponentPlayerBox'
import { getPlayersByCollective } from '../../../Services/players.service'
import { orderPlayersByMajorDate, orderPlayersByMinorDate, showActivePlayers, showNotActivePlayers } from '../../../Services/filters/filterPlayers'
import imageArrow from '../../../assets/images/icons8-chevron-abajo-en-círculo-64.png'
import { getActualCollectiveId, getJwt } from '../../../Services/sessionStorage.service'

export default function Players(){
    
    const filters = document.getElementById('filters')

    const idActualCollective = getActualCollectiveId()
    const token = getJwt()

    const [players, setPlayers ] = useState({})
    const [msg, setMsg] = useState('')

    useEffect(() => {
        getPlayersByCollective(idActualCollective, token).then((data) =>{
            if(data.length > 0){
                if(data[0].email){
                    setPlayers(data)
                }else{
                    setMsg(`You don't have players yet`)
                }
            }else{
                setMsg('Error')
            }
            
        })
    }, [idActualCollective, token])


    
    const toggleFilters = () => {
        if(filters.getAttribute('class') === 'filter_options_hide'){
            filters.classList.remove('filter_options_hide')
            filters.classList.add('filter_options_show')
        }else{
            filters.classList.remove('filter_options_show')
            filters.classList.add('filter_options_hide')
        }
    }

    const orderByMinorDate = () => {
        setPlayers(orderPlayersByMinorDate(players))
    }

    const orderByMayorDate = () => {
        setPlayers(orderPlayersByMajorDate(players))
    }

    const showActives = () => {
        getPlayersByCollective(idActualCollective, token).then((data) =>{
            setPlayers(showActivePlayers(data))
        })
    }

    const showNotNotActives = () => {
        getPlayersByCollective(idActualCollective, token).then((data) =>{
            setPlayers(showNotActivePlayers(data))
        })
    }

    const takeOffFilters = () => {
        getPlayersByCollective(idActualCollective, token).then((data) =>{
            setPlayers(data)
        })
    }

    return(
        <div className="body_principal">
            <div className='collective_games'>
                <p className='titulo'>Players</p>
                <div>
                    <Link to={'/newPlayer'} className='btn_showHide'>Add new player</Link>
                </div>
            </div>
            <div className='box_filtro'>
                <div className='filter_title'>
                    <p className='titulo'>Ordenar por: </p>
                </div>
                <img src={imageArrow} className='imageArrow' alt='icono menú'  onClick={toggleFilters}/>
                <div className='filter_options_hide' id='filters'>
                    <button className='filter' onClick={orderByMinorDate}>⇩ Date</button>
                    <button className='filter' onClick={orderByMayorDate}>⇧ Date</button>
                    <button className='filter' onClick={showActives}>Show actives</button>
                    <button className='filter' onClick={showNotNotActives}>Show not active</button>
                    <button className='filter' onClick={takeOffFilters}>Take off filters</button>
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
                                    idPlayer={player.id}
                                    name={player.name} 
                                    email={player.email}
                                    age={player.age}
                                    phone={player.phone}
                                    creationDate={player.creationDate}
                                    idCollective={idActualCollective}
                                    active={player.active}
                                />
                    })
                    :
                    <p className='titulo'>{msg}</p>
                }
            </div>
        </div>
    )
}