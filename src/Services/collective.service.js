import axios from "axios";

const API_URL = "http://localhost:9011/api/v1/collectives";
/*
export const deleteCollective = async (collective, token) => {
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
            return response.request.status;
        }
        ).catch((error) => {
            return error.response.status;
        });  
}
*/
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


