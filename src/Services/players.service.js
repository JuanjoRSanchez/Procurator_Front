import axios from "axios"

const API_URL = "http://localhost:9011/api/v1/players";

export const addPlayerToCollective = async (user, token) => {
    const action = "/addPlayerToCollective"
        const response = await axios({
            method: 'POST',
            url: API_URL + action,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data:user
            })
            .then((response) => {
                return response.data.status;
            }
            ).catch((error) => {
                console.log(error)
                 return error;
        })
   
    return response;

}


export const addPlayerToGame = async (body, token) => {
    const action = "/addPlayerToGame"
    let response = null
    try{
        response = await axios({
            method: 'POST',
            url: API_URL + action,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data: body
            })
            .then((response) => {
                response = response.data.status;
            }
            ).catch((error) => {
                console.log(error)
                response = "error";
        })
    }catch (error){
        response = 'error'
    }
    return response;

}

export const getAllPlayers = async (token) => {
    const action = "/getPlayers"
    try{
        const response = await axios({
            method: 'GET',
            url: API_URL + action,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            })
            .then((response) => {
                console.log(response.data)
                return response.data;
            }
            ).catch((error) => {
                console.log(error)
                return error.response.status;
        })
        return response;
    }catch (error){
        return 'error'
    }
    
    
}

export const getPlayersByCollective = async (idCollective, token) => {
    const action = "/getPlayersByCollective/"

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

export const getPlayersByGame = async (idCollective, token) => {
    const action = "/getPlayers/"
    let response = null
    try{
        response = await axios({
            method: 'GET',
            url: API_URL + action + idCollective,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            })
            .then((response) => {
                response = response.data;
            }
            ).catch((error) => {
                console.log(error)
                response = "error";
        })
    }catch (error){
        response = 'error'
    }
    return response;
    
}

export const deletePlayer = async (playerId, token) =>{
    const action = "/deletePlayer/"
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
                console.log(response.data)
                return response.data;
            }
            ).catch((error) => {
                console.log(error)
                return error.response.status;
        })
        return response;
    }catch (error){
        return 'error'
    }


}