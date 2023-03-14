import axios from "axios";

const API_URL = "http://localhost:9011/api/v1/collectives";

export  const getAllCollectives = async (token, user_email) => { 
    const action = "/getCollectivesByUserEmail/"
    const response = await axios({
        method: 'GET',
        url: API_URL + action + user_email,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        })
        .then((response) => {
            return response.data;
        }
        ).catch((error) => {
            console.log(error)

            return  "error";
    });  
    return response;
}

export  const getCollectivesByUserEmailAndName = async (body ,token) => {
    const action = "/getCollective"
    try{
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
                return response.data;
            }
            ).catch((error) => {
                console.log(error)
                return  "error";
        });  
        return response;
    }catch(error){

    }
}

export const addCollective = async (collective, token) => {
    const action = '/addCollective'
    try{
        const resp = await axios({
            method: 'POST',
            url: API_URL + action,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: collective
        })
        .then((response) => {
            console.log(response)
            return JSON.stringify(response.data.status);     
        }).catch((error) => {
            return error.response.status;

        })
        return resp
    }catch(error){

    }
   
}

export const updateCollective = async (collective, token) => {
    try{
        const resp = await axios({
            method: 'PUT',
            url: API_URL + '/updateCollective',
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data: collective
            })
            .then((response) => {
                return response.request.status;
            }
            ).catch((error) => {
                return error.response.status;
            });  
            return resp
    }
    catch(error){
        return error
    }
    
}


export const deleteCollective = async (collective, token) => {
    try{
        const resp = await axios({
            method: 'DELETE',
            url: API_URL,
            headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            data: collective
            })
            .then((response) => {
                return response.request.status;
            }
            ).catch((error) => {
                return error.response.status;
            });  
            return resp
    }
    catch(error){
        return error
    }
    
}


