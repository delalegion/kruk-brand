import styled from "styled-components";
import ImageFirst from "../../assets/what_2.svg";
import ImageSecond from "../../assets/what_1.svg";
import ImageThird from "../../assets/what_3.svg";

import { useEffect, useRef } from 'react';
import gsap from 'gsap/all';

const Title = styled.h1`
    font-size: 6.250vw;
    font-family: ${props => props.theme.semiBold};

    @media (min-width: 1920px) {
        font-size: 120px;
    }
    @media (max-width: 768px) {
        font-size: 13vw;
        margin-top: 0px;
    }
`
const OfferStyled = styled.section`
    padding: 50px 0;
    margin: 100px 0;

    @media (max-width: 768px) {
        padding: 30px 0;
        margin: 10px 0;
        margin-top: 100px;
    }
`
const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.646vw;
    grid-auto-rows: 1fr;

    @media (min-width: 1920px) {
        font-size: 70px;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    &:nth-child(2) {
        margin-top: 100px;
        @media (max-width: 500px) {
            margin-top: 0;
        }
    }
    &:nth-child(3) {
        margin-top: 20px;
        @media (max-width: 768px) {
            margin-top: 0;
            position: relative;
            top: -90px;
        }
        @media (max-width: 500px) {
            margin-top: 0;
            position: relative;
            top: 0px;
        }
    }
`
const GridItemText = styled.p`
    font-size: 2.083vw;
    font-family: ${props => props.theme.semiBold};
    margin-top: 30px;

    @media (min-width: 1920px) {
        font-size: 40px;
    }
    @media (max-width: 768px) {
        font-size: 4.583vw;
        margin-top: 15px;
    }
    @media (max-width: 500px) {
        font-size: 7.583vw;
    }

`
const GridItemBox = styled.div`
    padding: 30px 10px;
    background-color: #272727;
    justify-content: center;
    display: flex;
    position: relative;
    /* height: 380px; */

    & > img {
        max-width: 100%;
        max-height: 380px;

        @media (max-width: 768px) {
            max-height: 280px;
        }
    }
`
const RedReveal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: ${props => props.theme.primary};
`

const Offer = () => {

    const title = useRef(null);
    const section = useRef(null);

    const revealRefs = useRef([]);
    revealRefs.current = [];
 
    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        gsap.set(title.current, { y: -70, opacity: 0 });
        gsap.to(title.current, {
            duration: 0.7,
            y: 0,
            opacity: 1,
            ease: "power2",
            scrollTrigger: {
                trigger: title.current,
                start: 'top center+=50',
                toggleActions: 'restart none none none'
            }
        })
        revealRefs.current.forEach((el, index) => {
            gsap.set(el, { height: "100%" });
            gsap.to(el, {
                duration: 1,
                ease: 'power2',
                height: 0,
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    stagger: 0.2,
                    start: 'top center+=150',
                    toggleActions: 'restart none none none'
                }
            });
        });
    }, []);


    return(
        <>
            <OfferStyled ref={section}>
                <Title ref={title}>What i do</Title>
                <GridStyled>
                    <GridItem>
                        <GridItemBox>
                            <RedReveal ref={addToRefs} />
                            <img src={ImageThird} alt="" />
                        </GridItemBox>
                        <GridItemText>
                        I'm doing modern websites
                        </GridItemText>
                    </GridItem>
                    <GridItem>
                        <GridItemBox>
                            <RedReveal ref={addToRefs} />
                            <img src={ImageFirst} alt="" />
                        </GridItemBox>
                        <GridItemText>
                        I'm making new image for brands
                        </GridItemText>
                    </GridItem>
                    <GridItem>
                        <GridItemBox>
                            <RedReveal ref={addToRefs} />
                            <img src={ImageSecond} alt="" />
                        </GridItemBox>
                        <GridItemText>
                        I'm designing things to web and print
                        </GridItemText>
                    </GridItem>
                </GridStyled>
            </OfferStyled>
        </>
    )
}

export default Offer;