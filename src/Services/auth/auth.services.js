import axios from "axios";
import { Buffer } from 'buffer';
import { setJwt, setUserEmail, setUserName, getActualUserName, getActualToken } from "../sessionStorage.service";

const API_URL = "http://localhost:9011/api/v1/auth";

export function signUp(user) {
      axios.post(API_URL + "/register", JSON.stringify(user),
                {
                    headers: {'Content-Type': 'application/json'},
                }
                ).then((response) => {
                    console.log(response)
 
                    setUserEmail(user.email)        
                    setJwt(response.data.token)
                    setUserName(user.name);

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
            setUserEmail(user.email)        
            setJwt(response.data.token)
            setUserName(response.data.userName);
            return response.data  
        }
        ).catch((error) => {
            console.log("Error desde login: " +  error);
            return error.response.status;
        });  
    return resp
}

export  function  logout()  {

    sessionStorage.removeItem("useEmail");
    sessionStorage.removeItem("jwt")
    sessionStorage.removeItem("userName")
    sessionStorage.removeItem("Collective")
    sessionStorage.removeItem("game")

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
    if(jwt != null){
        jwtCheck = isTokenExpired(jwt);
        if(userName !== null && jwtCheck ){
            return true
        }else{
            return false;
        }
    }
    
 }
