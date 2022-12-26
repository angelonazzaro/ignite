const baseURL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`;

const getCurrentMonth = () => {
    let month = new Date().getMonth() + 1; // Months' index starts at 0
    
    if (month < 10) month = `0${month}`;

    return month; 
 } 

const getCurrentDay = () => {
    let day = new Date().getDay();

    if (day < 10) day = `0${day}`;

    return day; 
} 

const currentYear = new Date().getFullYear(); 
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay(); 

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`; 
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const getPopularGamesURL = () => `${baseURL}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`; 
export const getNewGamesURL = () => `${baseURL}&dates=${lastYear},${currentDate}&ordering=-added&page_size=10`;
export const getUpComingGamesURL = () => `${baseURL}&dates=${currentDate},${nextYear}&ordering=-released&page_size=10`;
export const getGameDetailsURL = (gameId) => `https://api.rawg.io/api/games/${gameId}?key=${process.env.REACT_APP_API_KEY}`;
export const getGameScreenShotsURL = (gameId) => `https://api.rawg.io/api/games/${gameId}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
export const getSearchGameURL = (gameName) => `${baseURL}&search=${gameName}&page_size=9`;