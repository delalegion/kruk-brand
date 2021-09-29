import AnimateTitle from "components/AnimatedTitle/AnimatedTitle";

import styled from 'styled-components';
import { Link } from 'react-scroll';

import useCursorHandlers from "hooks/useCursorHandlers";

const Scroll = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-start;
    margin-left: 200px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        top: -30px;
    }
`
const ScrollButtonBox = styled.div`
    width: 9.375vw;
    height: 9.375vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -8.375vw;
    margin-right: 50px;

    @media (min-width: 1920px) {
        width: 180px;
        height: 180px;
    }
    @media (max-width: 1024px) {
        width: 18.375vw;
        height: 18.375vw;
        top: 0;
    }
`
const ScrollButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #757575;
    margin: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    transition: ${props => props.theme.animation};

    & > svg > path {
        transition: all 1s ease;
    }
    @media (max-width: 1650px) {
        & > svg {
            width: 1.818vw;
            height: 2.667vw;
        }
    }
    @media (max-width: 1024px) {
        & > svg {
            width: 2.930vw;
            height: 3.906vw;
        }
    }
    &:hover {
        cursor: pointer;
        background: #fff;
        top: -10px;
        bottom: -10px;
        color: black;
        left: -10px;
        right: -10px;

        & > svg {
            & > path:nth-child(1) {
                fill: black;
            }
            & > path:nth-child(2) {
                stroke: black;
            }
        }
    }
`

const Header = () => {

    const cursorHandlers = useCursorHandlers();

    return(
        <>
            <AnimateTitle title="Any questions? Feel free to ask! 🤩" />
            <Scroll>
                    <ScrollButtonBox {...cursorHandlers}>
                        <ScrollButton name="ScrollButton" to="contact" smooth={true} duration={500} offset={-50}>
                            <svg width="30" height="44" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9 2L16.9 0.35L13.6 0.35L13.6 2L16.9 2ZM13.6 2L13.6 40.5L16.9 40.5L16.9 2L13.6 2Z" fill="white"/>
                                <path d="M27 29L15 41L3 29" stroke="white" strokeWidth="3.3" strokeLinecap="square"/>
                            </svg>
                        </ScrollButton>
                    </ScrollButtonBox>
            </Scroll>
        </>
    )
}

export default Header;