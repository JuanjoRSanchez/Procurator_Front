import Cookies from 'js-cookie';


const expirationTime = new Date(new Date().getTime() + 15 * 60 * 1000);

export function setUserName(name){
    Cookies.set("userName", name, { expires: expirationTime });
}

export function getUserName(){

    return Cookies.get('userName' )
}

export function setJwt(jwt){
    console.log(jwt)
    Cookies.set('jwt', jwt, { expires: expirationTime })
}

export function getJwt(){
    return  Cookies.get('jwt')
}

export function setUserEmail(email){
    Cookies.remove('email')
    Cookies.set('useEmail', email, { expires: expirationTime } )
}

export function getUserEmail(){

    return Cookies.get('useEmail' )
}



export function setActualCollective(collective){
    try{
        Cookies.set('Collective', JSON.stringify( collective), { expires: expirationTime })
        console.log(collective)

    }catch(error){
        console.log(error)
    }
}

export function getActualCollective () {
    let actualCollective = '';
    try{
        actualCollective = JSON.parse(Cookies.get('Collective'))
        // actualCollective = Cookies.get('Collective')
    }catch(error){
        console.log(error)
    }
    return actualCollective
}

export function setActualCollectiveId(collective){
    try{
        Cookies.set('Collective_id', JSON.stringify( collective), { expires: expirationTime })
    }catch(error){
        console.log(error)
    }
}

export function getActualCollectiveId () {
    let idActualCollective = '';
    try{
        idActualCollective = Cookies.get('Collective_id')
    }catch(error){
        console.log(error)
    }
    return idActualCollective
}

export function setActualPlayer(idPlayer){
    try{
        Cookies.set('actualPlayer', JSON.stringify(idPlayer), { expires: expirationTime })
    }catch(error){
        console.log(error)
    }
}

export function getActualPlayer  ()  {
    let actualPlayer = {};
    try{
        // actualPlayer = JSON.parse(Cookies.get('actualPlayer'))
        actualPlayer = Cookies.get('actualPlayer')

    }catch(error){
        console.log(error)
    }
    return actualPlayer
}

export function setActualGame  (game)  {
    Cookies.set('game', JSON.stringify(game), { expires: expirationTime })
}

export function getActualGame () {
    let actualGame = null;
    try{
        // actualGame = JSON.parse(Cookies.get('game'))
        actualGame = Cookies.get('game')

    }catch(error){
        console.log(error)
    }
    return actualGame
}

export function getActualIdGame() {
    let idActualGame = null;
    try{
        idActualGame = JSON.parse(Cookies.get('game')).idGame
    }catch(error){
        console.log(error)
    }
    return idActualGame
}
export function setActualToken (token) {
    Cookies.set('jwt', JSON.token, { expires: expirationTime })
}


export function getActualToken ()  {
    let actualToken = null;
    try{
        actualToken = Cookies.get('jwt')
    }catch(error){
        console.log(error)
    }
    return actualToken
}

export function getActualUserName () {
    let actualUserName = null;
    try{
        actualUserName = Cookies.get("userName");
    }catch(error){
        console.log(error)
    }
    return actualUserName
}


