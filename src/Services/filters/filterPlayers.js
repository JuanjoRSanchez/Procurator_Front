

export const orderPlayersByMinorDate = (games) => {
    const orderedGames = [...games].sort(
        (objA, objB) => new Date (objB.creationDate) - new Date (objA.creationDate),
      )
    return orderedGames
}
export const orderPlayersByMajorDate = (games) => {
    const orderedGames = [...games].sort(
        (objA, objB) => new Date (objB.creationDate) - new Date (objA.creationDate),
      )
    return orderedGames
}

export const orderPlayersById = (games) => {
    const orderedGames = [...games].sort(
        (objA, objB) => objA.id - objB.id,
      )
    return orderedGames
}

export const showActivePlayers = (games) => {
    const activePlayers = [] 
    games.map(
        (objA) =>  objA.active ? activePlayers.push(objA) : null 
    )
    return activePlayers
}

export const showNotActivePlayers = (games) => {
    const notActivePlayers = [] 
    games.map(
        (objA) => !objA.active  ? notActivePlayers.push(objA) : null 
    )
    return notActivePlayers
}