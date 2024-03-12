import axios from "axios";
import { Buffer } from 'buffer';
import { getJwt, getUserEmail, setJwt, setUserEmail, setUserName } from "../sessionStorage.service";

const API_URL = "http://localhost:9011/api/v1/auth";

export function signUp(user) {
      axios.post(API_URL + "/register", JSON.stringify(user),
                {
                    headers: {'Content-Type': 'application/json'},
                }
                ).then((response) => {
                    console.log(response)
                    setUserName(response.data.userName)
                    setJwt(response.data.token)
                    setUserEmail(user.email)

                }).catch((error) => {
                    console.log(error)
                    return "error";
                });               
}

export  const login = async (user) => {
    console.log(user)
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
            console.log(response)
            setUserName(response.data.userName)
            setJwt(response.data.token)
            setUserEmail(user.email)

            return response.data  
        }
        ).catch((error) => {
            console.log("Error desde login: " +  error);
            return error.response.status;
        });  
    return resp
}

export  function  logout()  {

    sessionStorage.removeItem('useEmail')
    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('Collective_id')
    sessionStorage.removeItem('Collective')
    sessionStorage.removeItem('game')
    sessionStorage.removeItem('actualPlayer')
    
}

 export function getTokenDate(token) {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
    const decoded = JSON.parse(decodedJson)
    const exp = decoded.exp;
    return exp;
}

export function isAuthenticated (){
    let userName = getUserEmail("useEmail");
    let jwt = getJwt("jwt");
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

 export function isTokenExpired(token) {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
    const decoded = JSON.parse(decodedJson)
    const exp = decoded.exp;
    const date = new Date(exp)
    const nonExpired = (Date.now() >= date)
    return nonExpired
  }


 