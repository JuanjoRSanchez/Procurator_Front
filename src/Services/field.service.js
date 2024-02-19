import axios from "axios";

const API_URL = "http://localhost:9011/api/v1/field";

export const getFieldById = async (fieldId, token) => {
    const action = "/"
    const response = await axios({
        method: 'GET',
        url: API_URL + action + fieldId,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        })
        .then((response) => {
            return response.data;
        }
        ).catch((error) => {
            return  "error";
    });
    return response;
}

export const getFieldsByCollectiveId = async (collectiveId, token) => {
    const action = "/findByCollectiveId/"
    const response = await axios({
        method: 'GET',
        url: API_URL + action + collectiveId,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        })
        .then((response) => {
            return response;
        }
        ).catch((error) => {
            return  "error";
    });
    return response;
}

export const addField = async (field, token) => {
    const action = ""
    const response = await axios({
        method: 'POST',
        url: API_URL + action,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        data: field
        })
        .then((response) => {
            return response;
        }
        ).catch((error) => {
            return  "error";
    })

    return response;
}

export const updateField = async (field, token) => {
    const action = ""
    const response = await axios({
        method: 'PUT',
        url: API_URL + action ,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        data: field,
        }).then((response) => {
            return response;
        }).catch((Error) => {
            return Error
        })
    return response;
}

export const deleteField = async (fieldId, token) => {
    const action = "/"
    const response = await axios({
        method: 'DELETE',
        url: API_URL + action + fieldId,
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
        }})
        .then((response) => {
            return response;
        }
        ).catch((error) => {
            return  Error;
    })
    return response;
}