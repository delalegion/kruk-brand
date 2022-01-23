import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Project1 from "assets/projects/1.png";
import Project2 from "assets/projects/2.png";
import Project3 from "assets/projects/3.png";
import Project4 from "assets/projects/4.png";
import Project5 from "assets/projects/5.png";
import Project6 from "assets/projects/6.png";

import useCursorHandlers from "hooks/useCursorHandlers";

import Reveal from "components/Reveal";
import Title from "components/Title";
import { IntersectionObserver } from "hooks/useIntersection";
import ButtonToWorks from "./ButtonToWorks";

const WorksStyled = styled.section`
    padding: 50px 0;
    margin-top: 100px;

    @media (max-width: 768px) {
        padding: 20px 0;
        margin: 0;
    }
`
const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.646vw;
    grid-auto-rows: 1fr;

    @media (min-width: 768px) {
        & > div:nth-child(2) {
            transform: translateY(120px);
        }
        & > div:nth-child(5) {
            transform: translateY(120px);
        }
    }

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
const ItemText = styled.h2`
    font-size: 1.146vw;
    font-family: ${props => props.theme.semiBold};
    margin-top: 15px;
    margin-bottom: 15px;

    @media (min-width: 1920px) {
        font-size: 22px;
    }
    @media (max-width: 768px) {
        font-size: 3.146vw;
        margin-top: 8px;
    }
    @media (max-width: 500px) {
        font-size: 3.546vw;  
        margin-bottom: 5px;
    }
`
const ItemClient = styled.p`
    font-size: 0.990vw;
    font-family: ${props => props.theme.medium};
    margin: 0;
    color: #999999;

    @media (min-width: 1920px) {
        font-size: 19px;
    }
    @media (max-width: 768px) {
        font-size: 2.990vw;
    }
    @media (max-width: 500px) {
        font-size: 2.990vw;
    }
`
const ItemPicture = styled.picture`
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    & > img {
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        font-family: "object-fit: cover";
        height: calc(100% + 2px);
        bottom: auto;
        transition: ${props => props.theme.animationSecond};
    }
    & > img:nth-child(2) {
        z-index: 2;
        position: relative;
    }
    & > img:nth-child(3) {
        position: absolute;
        left: 0;
        z-index: 1;
    }
`
const ItemFigure = styled.figure`
    background: hsla(0,0%,100%,.05);
    display: block;
    position: relative;
    padding-top: 70.33333%;
    margin: 0;
    overflow: hidden;

    &:nth-child(2),
    &:nth-child(5) {
        background: red;
    }
`
const GridItem = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        margin: 10px 0;
        justify-content: center;
    }
    &:hover {
        cursor: pointer;
    }
    &:hover ${ItemPicture} {
        & > img {
            transform: scale(1.1);
        }
        & > img:nth-child(2) {
            opacity: 0;
        }
    }
`

const Works = () => {

    const cursorHandlers = useCursorHandlers();

    let works_Array = [
        {
            "image": Project1,
            "image_hover": Project2,
            "title": "I'm doing modern websites",
            "client": "Konfederacja Kobiet RP"
        },
        {
            "image": Project1,
            "image_hover": Project2,
            "title": "I'm doing modern websites",
            "client": "Konfederacja Kobiet RP"
        },
        {
            "image": Project1,
            "image_hover": Project2,
            "title": "I'm doing modern websites",
            "client": "Konfederacja Kobiet RP"
        },
        {
            "image": Project1,
            "image_hover": Project2,
            "title": "I'm doing modern websites",
            "client": "Konfederacja Kobiet RP"
        },
        {
            "image": Project1,
            "image_hover": Project2,
            "title": "I'm doing modern websites",
            "client": "Konfederacja Kobiet RP"
        },
        {
            "image": Project1,
            "image_hover": Project2,
            "title": "I'm doing modern websites",
            "client": "Konfederacja Kobiet RP"
        },
    ]

    return(
        <>
            <WorksStyled>
                <IntersectionObserver>
                    <Title>Selected works</Title>
                </IntersectionObserver>
                <GridStyled>
                {works_Array.map((item, key) => (
                    <IntersectionObserver key={key}>
                        <GridItem {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <Reveal />
                                    <img src={item.image} alt="" />
                                    <img src={item.image_hover} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                {item.title}
                            </ItemText>
                            <ItemClient>
                                {item.client}
                            </ItemClient>
                        </GridItem>
                    </IntersectionObserver>
                ))}
                </GridStyled>
                <IntersectionObserver>
                    <ButtonToWorks />
                </IntersectionObserver>

                {/* <GridStyled>
                    <GridItem {...cursorHandlers}>
                        <ItemFigure>
                            <ItemPicture>
                                <RedReveal />
                                <img src={Project1} alt="" />
                                <img src={Project2} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                        </ItemText>
                        <ItemClient>
                            Konfederacja Kobiet RP
                        </ItemClient>
                    </GridItem>
                    <GridItem {...cursorHandlers}>
                        <ItemFigure>
                            <ItemPicture>
                                <RedReveal />
                                <img src={Project2} alt="" />
                                <img src={Project1} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt strony internetowej przedstawiające urządzenie do bezbolesnej i skutecznej epilacji
                        </ItemText>
                        <ItemClient>
                            My Infinity Clinics
                        </ItemClient>
                    </GridItem>
                    <GridItem {...cursorHandlers}>
                        <ItemFigure>
                            <ItemPicture>
                                <RedReveal />
                                <img src={Project3} alt="" />
                                <img src={Project1} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Strona dla firmy specjalizującej się w transporcie drogowym, lotniczym, kolejowym oraz morskim
                        </ItemText>
                        <ItemClient>
                            Linktis.pl
                        </ItemClient>
                    </GridItem>
                    <GridItem {...cursorHandlers}>
                        <ItemFigure>
                            <ItemPicture>
                                <RedReveal />
                                <img src={Project4} alt="" />
                                <img src={Project1} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt strony internetowej dla fundacji dającej głos historii tworzącej audiobooki
                        </ItemText>
                        <ItemClient>
                            Wolne Dźwięki
                        </ItemClient>
                    </GridItem>
                    <GridItem {...cursorHandlers}>
                        <ItemFigure>
                            <ItemPicture>
                                <RedReveal />
                                <img src={Project5} alt="" />
                                <img src={Project1} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt portalu służący do wymiany opinii między studentami - PogadajmyoStudiach.pl
                        </ItemText>
                        <ItemClient>
                            Stowarzyszenie Studia na Horyzoncie
                        </ItemClient>
                    </GridItem>
                    <GridItem {...cursorHandlers}>
                        <ItemFigure>
                            <ItemPicture>
                                <RedReveal />
                                <img src={Project6} alt="" />
                                <img src={Project1} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt dla Souvenir Plaza - największego sklepu z pamiątkami w Warszawie
                        </ItemText>
                        <ItemClient>
                            Souvenir Plaza
                        </ItemClient>
                    </GridItem>
                </GridStyled> */}
            </WorksStyled>
        </>
    )
}

export default Works;