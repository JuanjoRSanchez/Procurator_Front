import axios from "axios";

const baseURL = "http://localhost:9011/api/v1/collectives";

export  const getAllCollectives = async (token, user) => {
    
    const action = "/getAll"
    const response = await axios({
        method: 'POST',
        url: baseURL + action,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        data: user
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