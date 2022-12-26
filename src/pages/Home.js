import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesActions";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames())
    });

    return <></>;
}

export default Home;