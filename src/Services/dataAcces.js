

export const getActualCollective = () => {
    let idActualCollective = '';
    try{
        idActualCollective = JSON.parse(localStorage.getItem('Collective')).id
    }catch(error){
        console.log(error)
    }
    return idActualCollective
}

export const getActualPlayer = () => {
    let actualPlayer = {};
    try{
        actualPlayer = JSON.parse(localStorage.getItem('actualPlayer'))
    }catch(error){
        console.log(error)
    }
    return actualPlayer
}

export const getActualGame = () => {
    let actualGame = null;
    try{
        actualGame = JSON.parse(localStorage.getItem('game'))
    }catch(error){
        console.log(error)
    }
    return actualGame
}

export const getActualIdGame = () => {
    let idActualGame = null;
    try{
        idActualGame = JSON.parse(localStorage.getItem('game')).idGame
    }catch(error){
        console.log(error)
    }
    return idActualGame
}

export const getActualToken = () => {
    let actualToken = null;
    try{
        actualToken = localStorage.getItem('jwt')
    }catch(error){
        console.log(error)
    }
    return actualToken
}

export const getActualUserName = () => {
    let actualUserName = null;
    try{
        actualUserName = localStorage.getItem("userName");
    }catch(error){
        console.log(error)
    }
    return actualUserName
}


export const setActualGame = (game) => {
    localStorage.setItem('game', JSON.stringify(game))
}