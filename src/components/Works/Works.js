import styled from "styled-components";

import Project1 from "../../assets/projects/1.png";
import Project2 from "../../assets/projects/2.png";
import Project3 from "../../assets/projects/3.png";
import Project4 from "../../assets/projects/4.png";
import Project5 from "../../assets/projects/5.png";
import Project6 from "../../assets/projects/6.png";

import Container from "components/Container";
import Coding from "./WorksCoding";
import useCursorHandlers from "hooks/useCursorHandlers";


const WorksStyled = styled.section`
    margin-top: 100px;
    scroll-behavior: smooth;

    @media (max-width: 768px) {
        margin: 0;
        margin-top: 50px;
    }
`
const Grid = styled.div`
    display: grid;
    position: relative;
    margin-bottom: 0.694vw;
    grid-column-gap: 0.694vw;
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 50px;

    @media (max-width: 769px) {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 2vw;
        margin: 0;
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
    & > img:nth-child(1) {
        z-index: 2;
        position: relative;
    }
    & > img:nth-child(2) {
        position: absolute;
        left: 0;
        z-index: 1;
    }
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
        & > img:nth-child(1) {
            opacity: 0;
        }
    }
`
const GridNormal = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.646vw;
    grid-auto-rows: 1fr;
    margin-top: 150px;

    @media (max-width: 768px) {
        ${ItemText} {
            font-size: 3vw;
        }
    }

    @media (min-width: 1920px) {
        font-size: 70px;
    }
    @media (min-width: 1024px) {
        & > ${Project} {
            &:nth-child(2),
            &:nth-child(5) {
                transform: translateY(120px);
            }
        }
    }
    @media (max-width: 769px) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 0;
        grid-gap: 0;
        grid-column-gap: 2vw;
    }
`
const GridA = styled.div`
    position: relative;

    @media (min-width: 769px) {
        & > ${Grid} > ${Project}:nth-child(1) {
            grid-column: 2/7;
        }
        & > ${Grid} > ${Project}:nth-child(2) {
            grid-column: 8/12;
        }
    }
`
const GridB = styled.div`
    position: relative;

    @media (min-width: 769px) {
        & > ${Grid} > ${Project}:nth-child(1) {
        grid-column: 1/6;
        }
        & > ${Grid} > ${Project}:nth-child(2) {
            grid-column: 7/11;
            margin-top: 50px;
        }
    }
`
const GridC = styled.div`
    position: relative;

    @media (min-width: 769px) {
        & > ${Grid} > ${Project}:nth-child(1) {
        grid-column: 3/7;
        margin-top: 30px;
        }
        & > ${Grid} > ${Project}:nth-child(2) {
            grid-column: 10/13;
        }
    }
`
const GridD = styled.div`
    position: relative;

    @media (min-width: 769px) {
        & > ${Grid} > ${Project}:nth-child(1) {
        grid-column: 1/5;
        margin-top: 50px;
        }
        & > ${Grid} > ${Project}:nth-child(2) {
            grid-column: 7/12;
        }
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
const CustomMouse = styled.div`
    width: 120px;
    height: 120px;
    padding: 20px;
    background: ${props => props.theme.grey};
    border-radius: 50%;
    position: fixed;
    pointer-events:none;
    transform: translateX(-50%) translateY(-50%);

    &.active {
        visibility: visible;
        opacity: 1;
        cursor: progress;
    }
`

const Works = () => {

    const cursorHandlers = useCursorHandlers();

    return(
        <>
            <WorksStyled id="works" name="works">
                <Container>
                <GridA>
                    <Grid>
                        <Project {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <img src={Project1} alt="" />
                                    <img src={Project4} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                            </ItemText>
                            <ItemClient>
                                Konfederacja Kobiet RP
                            </ItemClient>
                        </Project>
                        {/* ----------------------------- */}
                        <Project {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <img src={Project2} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                            </ItemText>
                            <ItemClient>
                                Konfederacja Kobiet RP
                            </ItemClient>
                        </Project>
                    </Grid>
                </GridA>

                {/* ------------------------------------------- */}

                <GridB>
                    <Grid>
                        <Project {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <img src={Project3} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                            </ItemText>
                            <ItemClient>
                                Konfederacja Kobiet RP
                            </ItemClient>
                        </Project>
                        {/* ----------------------------- */}
                        <Project {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <img src={Project4} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                            </ItemText>
                            <ItemClient>
                                Konfederacja Kobiet RP
                            </ItemClient>
                        </Project>
                    </Grid>
                </GridB>

                {/* ------------------------------------------- */}

                <GridC>
                    <Grid>
                        <Project {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <img src={Project5} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                            </ItemText>
                            <ItemClient>
                                Konfederacja Kobiet RP
                            </ItemClient>
                        </Project>
                        {/* ----------------------------- */}
                        <Project {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <img src={Project6} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                            </ItemText>
                            <ItemClient>
                                Konfederacja Kobiet RP
                            </ItemClient>
                        </Project>
                    </Grid>
                </GridC>

                {/* ------------------------------------------- */}

                <GridD>
                    <Grid>
                        <Project {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <img src={Project5} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                            </ItemText>
                            <ItemClient>
                                Konfederacja Kobiet RP
                            </ItemClient>
                        </Project>
                        {/* ----------------------------- */}
                        <Project {...cursorHandlers}>
                            <ItemFigure>
                                <ItemPicture>
                                    <img src={Project6} alt="" />
                                </ItemPicture>
                            </ItemFigure>
                            <ItemText>
                                Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                            </ItemText>
                            <ItemClient>
                                Konfederacja Kobiet RP
                            </ItemClient>
                        </Project>
                    </Grid>
                </GridD>

                <GridNormal>
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
                    </Project>
                </GridNormal>

                <Coding />

                </Container>
            </WorksStyled>
        </>
    )
}

export default Works;