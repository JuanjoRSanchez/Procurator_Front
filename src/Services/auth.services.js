import axios from "axios";

const API_URL = "http://localhost:9011/api/v1/auth";

const signUp =  (user) => {
      axios.post(API_URL + "/register", JSON.stringify(user),
                {
                    headers: {'Content-Type': 'application/json'},
                }
                ).then((response) => {
                    console.log(response.data.token)
                    localStorage.setItem("user", response.data.token);
                }).catch((error) => {
                    console.log(error)
                    return error;
                });    
                
                
}
    
   

const login = (name, password) => {
    return axios
        .post(API_URL + "/authenticate", {
            name,
            password
        }).then((response) => {
            if(response.data.token){
                localStorage.setItem("user", response.data);
            }
            return response.data;
        })
}
/*
const logout = () => {
    localStorage.removeItem("user");
}

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
 const authService = {
    signUp,
    login,
    
 }

 export default authService;