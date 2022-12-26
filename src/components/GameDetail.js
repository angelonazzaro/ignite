import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function GameDetail ({pathId}) {

    // Exit Details
    const navigationHistory = useNavigate();

    const exitDetailHandler = (e) => {
        const element = e.target; 

        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto'; 
            navigationHistory('/');
        }
    }

    const {screenshots, game, isLoading} = useSelector((store) => store.details);

    return (
        <>
            {!isLoading && (
                <CardShadow onClick={exitDetailHandler} className="shadow">
                <Details layoutId={pathId}>
                    <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${game.id}`}>{game.name}</motion.h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screenshots.results.map((screen) => (
                                <img src={screen.image} key={screen.id} alt={screen.id} />
                            ))}
                        </div>
                </Details>
            </CardShadow>
            )}
        </>
    );
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    
    overflow-y: scroll;

    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    inset: 0;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track {
        background-color: white;
    }
`;

const Details = styled(motion.div)`
    width: 80%;

    border-radius: 1rem;
    padding: 2rem 5rem; 
    background-color: white;

    position: absolute;
    left: 10%;
    color: black;

    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-between;

    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem; 

    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0;
`;

export default GameDetail;