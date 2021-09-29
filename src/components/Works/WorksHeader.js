import styled from 'styled-components';

import { Link } from 'react-scroll';
import AnimatedTitle from 'components/AnimatedTitle/AnimatedTitle';

import useCursorHandlers from "hooks/useCursorHandlers";

const Scroll = styled.div`
    display: flex;
    position: relative;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        top: -30px;
    }
`
const ScrollText = styled.p`
    max-width: 40%;
    font-size: 1.250vw;
    color: ${props => props.theme.grey};
    font-weight: 600;

    @media (min-width: 1920px) {
        font-size: 24px;
    }
    @media (max-width: 768px) {
        font-size: 3.125vw;
        max-width: 100%;
        margin: 0;
        margin-top: 10px;
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
        width: 15.375vw;
        height: 15.375vw;
    }
    @media (max-width: 768px) {
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
            <AnimatedTitle title="Check out my latest projects" />
            <Scroll>
                    <ScrollButtonBox {...cursorHandlers}>
                        <ScrollButton name="ScrollButton" to="works" smooth={true} duration={500} offset={-50}>
                            <svg width="30" height="44" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9 2L16.9 0.35L13.6 0.35L13.6 2L16.9 2ZM13.6 2L13.6 40.5L16.9 40.5L16.9 2L13.6 2Z" fill="white"/>
                                <path d="M27 29L15 41L3 29" stroke="white" strokeWidth="3.3" strokeLinecap="square"/>
                            </svg>
                        </ScrollButton>
                    </ScrollButtonBox>
                <ScrollText>
                    During my two years of experience i created dozens of projects for many clients belong various industries that I can now boast of. In the second section i presents my coding stuff, websites that i maked and apps that i am currently work. 
                </ScrollText>
            </Scroll>
        </>
    )
}

export default Header;