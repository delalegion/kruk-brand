import { useEffect, useRef } from 'react';

import styled from "styled-components";
import background from "../../assets/background_footer.png";
import circles from "../../assets/background_footer_circles.png";

import KUTE from "kute.js";

const BottomStyled = styled.section`
    padding: 50px 0;
    position: relative;
    z-index: 10;
    background-image: url(${background});
    background-size: 200%;
	background-position: bottom center;
    background-repeat: no-repeat;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 20px 0;
    }
    & > svg {
        fill: #E61E29;
        filter: blur(200px);
    }

`
const Background = styled.svg`
    position: absolute;
    bottom: -10px;
    right: 0px;
    z-index: 0;
    width: 1500px;

    /* @media (max-width: 1920px) {
        width: 100%;
        bottom: -200px;
    } */
    @media (max-width: 768px) {
        bottom: -950px;
        left: 0px;
    }

`

const Bottom = (props) => {

    // useEffect(() => {
    //     KUTE.fromTo(
    //         blob_1.current,
    //         { path: blob_1.current },
    //         { path: blob_2.current },
    //         { repeat: 999, duration: 6000, yoyo: true }
    //     ).start();
    // }, [])

    return(
        <>
            <BottomStyled>
                {props.children}

                <Background src={circles} alt="" />
   
            </BottomStyled>
        </>
    )
}

export default Bottom;