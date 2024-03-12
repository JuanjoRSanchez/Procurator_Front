import axios from "axios"

const API_URL = "http://localhost:9011/api/v1/player";

export const getPlayersByCollective = async (idCollective, token) => {
    const action = "/collective/"

    const respon = await axios({
            method: 'GET',
            url: API_URL + action + idCollective,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            })
            .then((response) => {
                return response.data;
            }
            ).catch((error) => {
                return error;
        })
    return respon;
    
}

export const getPlayersByGame = async (idGame, token) => {
    const action = "/game/"
    const response = await axios({
        method: 'GET',
        url: API_URL + action + idGame,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        })
        .then((response) => {
            console.log(response)
            return response.data;
        }
        ).catch((error) => {
            console.log(error)
            return "error";
    })

    return response;
    
}


export const getPlayersAddedToGame = async (idGame, token) => {
    const action = "/findAddedGame/"
    const response = await axios({
        method: 'GET',
        url: API_URL + action + idGame,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        })
        .then((response) => {
            return response.data;
        }
        ).catch((error) => {
            return "error";
    })
    return response;
}

export const getPlayersNotAddedToGame = async (idActualGame, idCollective, token) => {
    const action = "/findNotAddedToGame/"
    // console.log(idActualGame)
    // console.log(API_URL + action + idActualGame + '/' + idCollective )

    const response = await axios({
        method: 'GET',
        url: API_URL + action + idActualGame + '/' + idCollective ,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        })
        .then((response) => {
            return response.data;
        }
        ).catch((error) => {
            // console.log(error)
            return "error";
    })
    return response;
}

export const addPlayerToCollective = async (body, token) => {
    const action = "/collective"
        const response = await axios({
            method: 'POST',
            url: API_URL + action,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data:body
            })
            .then((response) => {
                return response.status;
            }
            ).catch((error) => {
                console.log(error.message)
                 return error;
        })
   
    return response;

}

export const addPlayerToGame = async (body, token) => {
    const action = "/game"
    
    const response = await axios({
            method: 'POST',
            url: API_URL + action,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data: body
            })
            .then((response) => {
                return response;
            }
            ).catch((error) => {
                return error
        })
  
    return response;

}

export const updatePlayer = async (player, token) => {
    const action = "/ew"
    try{
        const response = await axios({
            method: 'PUT',
            url: API_URL + action,
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: player
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error
            })
            return response;
        }catch (error){
            return 'error'
        }
} 

export const deletePlayerFromGame = async (gameId, playerId, token) =>{
    const action = "/takeOutPlayerFromGame/"
    try{
        const response = await axios({
            method: 'DELETE',
            url: API_URL + action + gameId + '/' + playerId ,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            })
            .then((response) => {
                return response.data;
            }
            ).catch((error) => {
                return error.response.status;
        })
        return response;
    }catch (error){
        return 'error'
    }
}

export const deletePlayer = async (playerId, token) =>{
    const action = "/"
    try{
        const response = await axios({
            method: 'DELETE',
            url: API_URL + action + playerId,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            })
            .then((response) => {
                return response;
            }
            ).catch((error) => {
                return error.response.status;
        })
        return response;
    }catch (error){
        return 'error'
    }


}

