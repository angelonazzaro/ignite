import axios from 'axios'; 
import { gameDetailsURL, gameScreenShotsURL } from '../API';

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL());
    const screenShotsData = await axios.get(gameScreenShotsURL());

    dispatch({
        type: "GET_DETAILS", 
        payload: {
            game: detailData.data,
            screenshots: screenShotsData.data
        }
    })
}