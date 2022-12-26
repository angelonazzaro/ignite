const initState = {
    popularGames: [], 
    newGames: [],
    upComingGames: [],
    searchedGames: []
}

export const gamesReducer = (state = initState, action) => {
    const payload = action.payload; 

    switch (action.type) {
        case "FETCH_GAMES":
            return {...state, 
                popularGames: payload.popularGames, 
                newGames: payload.newGames, 
                upComingGames: payload.upComingGames
            }; 
        case "FETCH_SEARCHED":
            return {...state, searchedGames: payload.searchedGames};
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searchedGames: [],
            };
        default: 
            return {...state};
    }
}