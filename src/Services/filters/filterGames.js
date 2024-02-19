

export const orderGamesByMinorDate = (games) => {
    const orderedGames = [...games].sort(
        (objA, objB) => new Date (objB.dateMatch) - new Date (objA.dateMatch),
      )
    return orderedGames
}

export const orderGamesByMayorDate = (games) => {
    const orderedGames = [...games].sort(
        (objA, objB) => new Date (objA.dateMatch) - new Date (objB.dateMatch),
      )
    return orderedGames
}

export const showPlayedGames = (games) => {
    const playedGames = [] 
    games.map(
        (objA) => new Date() > new Date (objA.dateMatch) ? playedGames.push(objA) : null 
    )
    return playedGames
}

export const showNotPlayedGames = (games) => {
    const playedGames = [] 
    games.map(
        (objA) => new Date() < new Date (objA.dateMatch) ? playedGames.push(objA) : null 
    )
    return playedGames
}