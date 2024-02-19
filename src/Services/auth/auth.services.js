import axios from "axios";
import { Buffer } from 'buffer';
import { getActualToken, getActualUserName } from "../dataAcces";

const API_URL = "http://localhost:9011/api/v1/auth";

export function signUp(user) {
      axios.post(API_URL + "/register", JSON.stringify(user),
                {
                    headers: {'Content-Type': 'application/json'},
                }
                ).then((response) => {
                    console.log(response)
                    localStorage.setItem("userEmail", user.email)        
                    localStorage.setItem("jwt", response.data.token)
                    localStorage.setItem("userName", user.name);
                    
                }).catch((error) => {
                    console.log(error)
                    return "error";
                });               
}


export  const login = async (user) => {
    const action = "/authenticate"
    const resp = await axios({
        method: 'POST',
        url: API_URL + action,
        headers: {
        'Content-Type': 'application/json'
        },
        data: user
        })
        .then((response) => {
            localStorage.setItem("userEmail", user.email)        
            localStorage.setItem("jwt", response.data.token)
            localStorage.setItem("userName", response.data.userName);
            console.log(response.data)
            return response.data  
        }
        ).catch((error) => {
            console.log("Error desde login: " +  error);
            return error.response.status;
        });  
    return resp
}

export  function  logout()  {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("jwt")
    localStorage.removeItem("userName")
    localStorage.removeItem("Collective")
    localStorage.removeItem("game")
}

 export function getTokenDate(token) {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
    const decoded = JSON.parse(decodedJson)
    const exp = decoded.exp;
    return exp;
}

export function isTokenExpired(token) {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
    const decoded = JSON.parse(decodedJson)
    const exp = decoded.exp;
    const expired = (Date.now() >= exp * 1000)
    return expired
  }

export function isAuthenticated (){
    let userName = getActualUserName()
    let jwt = getActualToken()
    let jwtCheck = null;
    if(jwt === null){
        console.log('eeeeeee')
    }else{
        jwtCheck = isTokenExpired(jwt);
        if(userName !== null && jwtCheck !== null ){
            return true
        }else{
            return false;
        }
    }
    
    
 }
