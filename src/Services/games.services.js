import axios from "axios";

const API_URL = "http://localhost:9011/api/v1/games";

export function getGames (collective_id, token) {
    axios({
        method: 'GET',
        url: API_URL + '/getGames/' + collective_id,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        })
        .then((response) => {
            //console.log(response.data)
            return response.data;
            //return "la madre que me pario";
        }
        ).catch((error) => {
            return error.response.status;
        });  
}

export function addGame (collective, token) {
    axios({
        method: 'DELETE',
        url: API_URL,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        data: collective
        })
        .then((response) => {
            console.log(response.request.status)
            return JSON.stringify(response.request.status);
        }
        ).catch((error) => {
            return error.response.status;
        });  
}


export function deleteGam (collective, token) {
    axios({
        method: 'DELETE',
        url: API_URL,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        data: collective
        })
        .then((response) => {
            console.log(response.request.status)
            return JSON.stringify(response.request.status);
        }
        ).catch((error) => {
            return error.response.status;
        });  
}

