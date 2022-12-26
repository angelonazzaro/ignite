import axios from 'axios'; 
import { getGameDetailsURL, getGameScreenShotsURL } from '../API';

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    });

    const detailData = await axios.get(getGameDetailsURL(id));
    const screenShotsData = await axios.get(getGameScreenShotsURL(id));

    dispatch({
        type: "GET_DETAILS", 
        payload: {
            game: detailData.data,
            screenshots: screenShotsData.data
        }
    })
}