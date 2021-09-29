import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

const TitleBox = styled.div`
    display: block;
    width: 100%;
    transition: transform 0.1s linear;
`
const Title = styled.h1`
    font-size: 6.250vw;
    display: inline-block;
    white-space: nowrap;
    margin-left: 150px;
    font-weight: 600;
    pointer-events: none;
    transition: transform 0.3s linear;

    @media (min-width: 1920px) {
        font-size: 10rem;
    }
    @media (max-width: 768px) {
        font-size: 12vw;
        font-family: ${props => props.theme.semiBold};
        margin-top: 0px;
        white-space: normal;
        margin-left: 0px;
        line-height: 1.1em;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 0;
        margin-top: 50px;
    }
`

const AnimateTitle = (props) => {

    const moveRef = useRef();
    const titleRef = useRef();
    
    const Mousedown = (event) => {

        const rect = moveRef.current.getBoundingClientRect().width + 300;
        const left = titleRef.current.getBoundingClientRect().left;

        let length = rect - window.innerWidth;
        if (window.innerWidth > rect) { length = -length };
        const width = window.innerWidth / length;

        let x = event.pageX - left;
        let y = x / width;
        if (window.innerWidth > rect) { y = 0; };

        if (window.innerWidth > 768) { gsap.to(moveRef.current, { duration: 2, ease: "expo.out", x: -y }); }
    }
    
    const enableMovement = () => {
        titleRef.current.addEventListener("mousemove", Mousedown);
    }

    useEffect(() => {
        titleRef.current.addEventListener("mouseenter", enableMovement);
    }, [])

    const setDefaultCoordinates = () => {
        if (moveRef.current != null) {
            if (window.innerWidth < 768) {
             moveRef.current.style.transform = "translate(0px, 0px)"; }
        }
    }

    useEffect(() => {
        window.addEventListener("resize", setDefaultCoordinates, false)
    }, [])

    return(
        <>
            <TitleBox ref={titleRef}>
                <Title ref={moveRef}>{props.title}</Title>
            </TitleBox>
        </>
    )
}

export default AnimateTitle;

AnimateTitle.propTypes = {
    title: PropTypes.string.isRequired
};