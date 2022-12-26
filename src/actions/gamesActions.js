import axios from "axios";
import { getPopularGamesURL, getUpComingGamesURL, getNewGamesURL, getSearchGameURL } from "../API";

// Action Creator
export const loadGames = () => async (dispatch) => {
    // Fetch with axios
    const popularData = await axios.get(getPopularGamesURL()); 
    const upComingData = await axios.get(getUpComingGamesURL());
    const newData = await axios.get(getNewGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularData.data.results,
            newGames: newData.data.results,
            upComingGames: upComingData.data.results
        }
    })
}

export const fetchSearch = (gameName) => async (dispatch) => {
    const searchGames = await axios.get(getSearchGameURL(gameName));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
        searchedGames: searchGames.data.results,
        },
    });

};