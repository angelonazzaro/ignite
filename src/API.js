const baseURL = `https://api.rawg.io/api/games?key=${process.env.API_KEY}`;

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

export const getPopularGamesURL = () => {
    return `${baseURL}&dates=${lastYear}, ${currentDate}&order=-rating&page_size=10`; 
}

console.log(getPopularGamesURL())