import axios from "axios";

const API_URL = "http://localhost:9011/api/v1/games";

export const getGames = async (collective_id, token) => {
    const action = '/getGames/'
    const resp = await axios({
        method: 'GET',
        url: API_URL + action + collective_id,
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
        });  
    return resp
}

export const addGame = async (game, token) => {
    const action = '/addGame'
    const resp = await axios({
        method: 'POST',
        url: API_URL + action,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        data: game
        })
        .then((response) => {
            console.log(response.request.status)
            return JSON.stringify(response.request.status);
        }
        ).catch((error) => {
            return error.response.status;
        });  
    return resp
}


export const updateGame = async (game, token) => {
    const action = '/update'
    const resp = await axios({
        method: 'PUT',
        url: API_URL + action,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        data: game
        })
        .then((response) => {
            console.log(response)
            return JSON.stringify(response.request.status);
        }
        ).catch((error) => {
            return error.response.status;
        });  
    return resp
}

export const deleteGame = async (idGame, token) => {
    const action = '/deleteGame/'
    const resp = await axios({
        method: 'DELETE',
        url: API_URL + action + idGame,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        })
        .then((response) => {
            console.log(response.request.status)
            return JSON.stringify(response.request.status);
        }
        ).catch((error) => {
            return error.response.status;
        });  
    return resp;
}

