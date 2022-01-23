import styled from 'styled-components';

import Project1 from "../../assets/projects/1.png";
import Project2 from "../../assets/projects/2.png";

import useCursorHandlers from "hooks/useCursorHandlers";
import Reveal from 'components/Reveal';
import { IntersectionObserver } from 'hooks/useIntersection';

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
`
const Project = styled.article`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-bottom: 4.883vw;
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
const WorksStyled = styled.section`
    margin: 100px 0;
    padding: 50px 0;
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
const GridNormal = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.646vw;
    grid-auto-rows: 1fr;
    margin-top: 50px;

    @media (min-width: 768px) {
        & > div:nth-child(2) {
            transform: translateY(120px);
        }
    }
    @media (min-width: 1920px) {
        font-size: 70px;
    }
    @media (max-width: 769px) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 0;
        grid-gap: 0;
        grid-column-gap: 2vw;
    }
`
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
    ]

    return(
        <>
        <WorksStyled>
            <Title>Recent works</Title>
            <GridNormal>
            {works_Array.map((item, key) => (
                <IntersectionObserver key={key}>
                    <Project {...cursorHandlers}>
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
                    </Project>
                </IntersectionObserver>
            ))}

                {/* <Project {...cursorHandlers}>
                        <ItemFigure>
                            <ItemPicture>
                                <img src={Project1} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                        </ItemText>
                        <ItemClient>
                            Konfederacja Kobiet RP
                        </ItemClient>
                </Project>
                <Project {...cursorHandlers}>
                        <ItemFigure>
                            <ItemPicture>
                                <img src={Project1} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                        </ItemText>
                        <ItemClient>
                            Konfederacja Kobiet RP
                        </ItemClient>
                </Project> */}
            </GridNormal>
        </WorksStyled>
        </>
    )
}

export default Works;