import axios from "axios";
import { Buffer } from 'buffer';

const API_URL = "http://localhost:9011/api/v1/auth";
export const useAuth = () => {

    const signUp = (user) =>  {
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

    const login = (user) => {
        const response = axios.post(API_URL + "/authenticate", JSON.stringify(user),
        {
            headers: {'Content-Type': 'application/json'},
        }
        ).then((response) => {
            console.log(response.data)    
            localStorage.setItem("userEmail", user.email)        
            localStorage.setItem("jwt", response.data.token)
            localStorage.setItem("userName", response.data.userName);
            response = response.data  
        }).catch((error) => {
            console.log("Error desde login: " +  error);
            return error.response.status 
        });
        return response;
    }
        
    const logout = () =>  {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("jwt")
        localStorage.removeItem("userName")
    }

    const getTokenDate = (token) => {
        const payloadBase64 = token.split('.')[1];
        const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
        const decoded = JSON.parse(decodedJson)
        const exp = decoded.exp;
        return exp;
    }

    const isTokenExpired = (token) => {
        const payloadBase64 = token.split('.')[1];
        const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
        const decoded = JSON.parse(decodedJson)
        const exp = decoded.exp;
        const expired = (Date.now() >= exp * 1000)
        return expired
    }

    const getCurrentUser = () => {
        let userName = localStorage.getItem("userName");
        let jwt = localStorage.getItem("jwt");

        if(userName && jwt){
            return {"x-auth-token": jwt}
        }else{
            return {};
        }
    }

    return { login, logout, signUp, getTokenDate, isTokenExpired, getCurrentUser };
    
}




