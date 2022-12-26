import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsActions";

import { Link } from "react-router-dom";

import { smallImage } from "../util";

function Game({game}) {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'; 
        dispatch(loadDetail(game.id)); 
    }

    return (
        <StyledGame layoutId={game.id} onClick={loadDetailHandler}>
            <Link to={`/game/${game.id}`}>
                <motion.h3 layoutId={`title ${game.id}`}>{game.name}</motion.h3>
                <p>{game.released}</p>
                <motion.img layoutId={`image ${game.id}`} src={smallImage(game.background_image, 640)} alt={game.name} />
            </Link>
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);

    text-align: center;

    border-radius: 1rem;
    cursor: pointer;

    overflow: hidden;

    img {
        width: 100%; 
        height: 40vh;
        object-fit: cover; 
    }
`;

export default Game;