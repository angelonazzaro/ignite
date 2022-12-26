import axios from 'axios'; 
import { gameDetailsURL, gameScreenShotsURL } from '../API';

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    });

    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotsData = await axios.get(gameScreenShotsURL(id));

    dispatch({
        type: "GET_DETAILS", 
        payload: {
            game: detailData.data,
            screenshots: screenShotsData.data
        }
    })
}