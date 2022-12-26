import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

function GameDetail ({pathId}) {

    // Exit Details
    const navigationHistory = useNavigate();

    // Get Platform icon
    const getPlatformIcon = (platformName) => {
        platformName = platformName.toLowerCase();

        if (platformName.includes('playstation')) return playstation; 

        if (platformName.includes('xbox')) return xbox; 

        if (platformName.includes('nintendo')) return nintendo; 

        if (platformName === 'pc') return steam; 

        if (platformName === 'ios') return apple;

        return gamepad;
    }

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
                                        <img key={data.platform.id} src={getPlatformIcon(data.platform.name)} alt={data.platform.name} />
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