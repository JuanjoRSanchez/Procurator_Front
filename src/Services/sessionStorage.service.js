

export function setUserName(name){

    sessionStorage.setItem('userName', name )
}

export function getUserName(){

    return sessionStorage.getItem('userName' )
}

export function setJwt(jwt){

    sessionStorage.setItem('jwt', jwt)
}

export function getJwt(){

    return sessionStorage.getItem('jwt' )
}
export function setUserEmail(email){

    sessionStorage.setItem('useEmail', email )
}

export function getUserEmail(){

    return sessionStorage.getItem('useEmail' )
}

export function setActualCollective(idCollective){
    try{
        sessionStorage.setItem('Collective', JSON.stringify(idCollective))
    }catch(error){
        console.log(error)
    }
}

export const getActualCollective = () => {
    let idActualCollective = '';
    try{
        idActualCollective = JSON.parse(sessionStorage.getItem('Collective'))
    }catch(error){
        console.log(error)
    }
    return idActualCollective
}

export const getActualCollectiveId = () => {
    let idActualCollective = '';
    try{
        idActualCollective = JSON.parse(sessionStorage.getItem('Collective')).id
    }catch(error){
        console.log(error)
    }
    return idActualCollective
}

export function setActualPlayer(idPlayer){
    try{
        sessionStorage.setItem('actualPlayer', JSON.stringify(idPlayer))
    }catch(error){
        console.log(error)
    }
}

export const getActualPlayer = () => {
    let actualPlayer = {};
    try{
        actualPlayer = JSON.parse(sessionStorage.getItem('actualPlayer'))
    }catch(error){
        console.log(error)
    }
    return actualPlayer
}

export const setActualGame = (game) => {
    sessionStorage.setItem('game', JSON.stringify(game))
}

export const getActualGame = () => {
    let actualGame = null;
    try{
        actualGame = JSON.parse(sessionStorage.getItem('game'))
    }catch(error){
        console.log(error)
    }
    return actualGame
}

export const getActualIdGame = () => {
    let idActualGame = null;
    try{
        idActualGame = JSON.parse(sessionStorage.getItem('game')).idGame
    }catch(error){
        console.log(error)
    }
    return idActualGame
}
export const setActualToken = (token) => {
    sessionStorage.setItem('jwt', JSON.token)
}


export const getActualToken = () => {
    let actualToken = null;
    try{
        actualToken = sessionStorage.getItem('jwt')
    }catch(error){
        console.log(error)
    }
    return actualToken
}

export const getActualUserName = () => {
    let actualUserName = null;
    try{
        actualUserName = sessionStorage.getItem("userName");
    }catch(error){
        console.log(error)
    }
    return actualUserName
}


