const initState = {
    popularGames: [], 
    newGames: [],
    upComingGames: []
}

export const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            const payload = action.payload; 
            return {...state, 
                popularGames: payload.popularGames, 
                newGames: payload.newGames, 
                upComingGames: payload.upComingGames
            }; 
        default: 
            return {...state};
    }
}