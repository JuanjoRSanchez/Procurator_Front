import axios from "axios";
import { Buffer } from 'buffer';

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

export  function login (user) {

    const response = axios.post(API_URL + "/authenticate", JSON.stringify(user),
    {
        headers: {'Content-Type': 'application/json'},
    }
    ).then((response) => {
        localStorage.setItem("userEmail", user.email)        
        localStorage.setItem("jwt", response.data.token)
        localStorage.setItem("userName", response.data.userName);
        return response.data  
    }).catch((error) => {
        console.log("Error desde login: " +  error);
        return error.response.status 
    });
    return response;
}

export  function  logout()  {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("jwt")
    localStorage.removeItem("userName")
    localStorage.removeItem("actualCollective")
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
    let userName = localStorage.getItem("userName");
    let jwt = localStorage.getItem("jwt")
    let jwtCheck = isTokenExpired(jwt);
    if(userName && jwtCheck){
        return {"x-auth-token": jwt}
    }else{
        return {};
    }
 }


/*
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
 }

 const authHeader = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        return {"x-auth-token": user.accessToken}
    }else{
        return {};
    }
 }
*/
/*
 const authService = {
    signUp,
    login,
    logout,
    isTokenExpired,
    getTokenDate
 }
*/
 // export default authService;