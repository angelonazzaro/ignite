import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadGames } from "../actions/gamesActions";

import styled from "styled-components";
import { motion } from "framer-motion";

import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

function Home() {
    const dispatch = useDispatch();
    // Fetching games
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch]);
    // Get the data from the now populated state
    const {popularGames, newGames, upComingGames} = useSelector(store => store.games); 

    return (
        <GameList>
            <GameDetail />
            <h2>UpComing Games</h2>
            <Games>
                {upComingGames.map((game) => <Game key={game.id} game={game} />)}
            </Games>
             <h2>Popular Games</h2>
            <Games>
                {popularGames.map((game) => <Game key={game.id} game={game} />)}
            </Games>
             <h2>New Games</h2>
            <Games>
                {newGames.map((game) => <Game key={game.id} game={game} />)}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0 5rem;

    h2 {
        padding: 5rem 0;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem; 
`;

export default Home;