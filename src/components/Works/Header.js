import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const TitleBox = styled.div`
    display: block;
    width: 100%;
    transition: transform 0.1s linear;
`
const Title = styled.h1`
    font-size: 10rem;
    display: inline-block;
    white-space: nowrap;
    margin-left: 150px;
    font-weight: 600;
    pointer-events: none;
    transition: transform 0.3s linear;
`
const Scroll = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
`
const ScrollText = styled.p`
    max-width: 40%;
    font-size: 24px;
    color: ${props => props.theme.grey};
    font-weight: 600;
`
const ScrollButtonBox = styled.div`
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -180px;
    margin-right: 50px;
`
const ScrollButton = styled.a`
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
    &:hover {
        cursor: pointer;
        background: #fff;
        top: -10px;
        bottom: -10px;
        color: black;
        left: -10px;
        right: -10px;
        transition: ${props => props.theme.animation};

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

    const moveRef = useRef();
    const titleRef = useRef();
    
    const mousedown = (event) => {

        const rect = moveRef.current.getBoundingClientRect().width;
        const left = titleRef.current.getBoundingClientRect().left;

        const length = rect - window.innerWidth;
        const width = window.innerWidth / length;
        let x = event.pageX - left;
        let y = x / width;

        if ( y > 150 ) { y = y + 300; }

        gsap.to(moveRef.current, { duration: 2, ease: "expo.out", x: -y });
    }

    const enableMovement = () => {
        titleRef.current.addEventListener("mousemove", mousedown);
    }

    useEffect(() => {
        titleRef.current.addEventListener("mouseenter", enableMovement);
    }, [])

    return(
        <>
            <TitleBox ref={titleRef}>
                <Title ref={moveRef}>Check out my latest projects</Title>
            </TitleBox>
            <Scroll>
                <ScrollButtonBox>
                    <ScrollButton>
                        <svg width="30" height="44" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9 2L16.9 0.35L13.6 0.35L13.6 2L16.9 2ZM13.6 2L13.6 40.5L16.9 40.5L16.9 2L13.6 2Z" fill="white"/>
                            <path d="M27 29L15 41L3 29" stroke="white" stroke-width="3.3" stroke-linecap="square"/>
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