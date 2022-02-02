import styled from "styled-components";
import Container from "components/Container";
import Coding from "./Coding/WorksCoding";
import useCursorHandlers from "hooks/useCursorHandlers";
import { IntersectionObserver } from "hooks/useIntersection";
import Reveal from "components/Reveal";
import { motion } from "framer-motion";
import { list } from "components/Data";
import { Link } from "react-router-dom";

const WorksStyled = styled.section`
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 50px 0;
    scroll-behavior: smooth;

    @media (max-width: 768px) {
        margin: 0;
        margin-top: 80px;
        margin-bottom: 80px;
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
const ItemText = styled(motion.h2)`
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
const ItemPicture = styled(motion.picture)`
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
const Project = styled(motion.article)`
    display: flex;
    flex-direction: column;

    a {
        color: white;
        text-decoration: none;
    }
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
        & > div {
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
        & > ${Grid} > div:nth-child(1) {
            grid-column: 2/7;
        }
        & > ${Grid} > div:nth-child(2) {
            grid-column: 8/12;
        }
    }
`
const GridB = styled.div`
    position: relative;

    @media (min-width: 769px) {
        & > ${Grid} > div:nth-child(1) {
        grid-column: 1/6;
        }
        & > ${Grid} > div:nth-child(2) {
            grid-column: 7/11;
            margin-top: 50px;
        }
    }
`
const GridC = styled.div`
    position: relative;

    @media (min-width: 769px) {
        & > ${Grid} > div:nth-child(1) {
        grid-column: 3/7;
        margin-top: 30px;
        }
        & > ${Grid} > div:nth-child(2) {
            grid-column: 10/13;
        }
    }
`
const GridD = styled.div`
    position: relative;

    @media (min-width: 769px) {
        & > ${Grid} > div:nth-child(1) {
        grid-column: 1/5;
        margin-top: 50px;
        }
        & > ${Grid} > div:nth-child(2) {
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

const Works = () => {

    const cursorHandlers = useCursorHandlers();

    return(
        <>
            <WorksStyled id="works" name="works">
                <Container>
                <GridA>
                    <Grid>
                        {list.slice(0, 2).map((item, i) => { 
                            return (
                                <>
                                    <IntersectionObserver>
                                        <Project {...cursorHandlers}>
                                            <Link to={"works/" + item.url}>
                                                <ItemFigure>
                                                    <ItemPicture>
                                                        <Reveal />
                                                        <img src={item.image} alt="" />
                                                        <img src={item.hover} alt="" />
                                                    </ItemPicture>
                                                </ItemFigure>
                                                <ItemText>
                                                    {item.name}
                                                </ItemText>
                                                <ItemClient>
                                                    {item.client}
                                                </ItemClient>
                                            </Link>
                                        </Project>
                                    </IntersectionObserver>
                                </>
                            )
                        })}
                    </Grid>
                </GridA>
                <GridB>
                    <Grid>
                        {list.slice(2, 4).map((item, i) => { 
                            return (
                                <>
                                    <IntersectionObserver>
                                        <Project {...cursorHandlers}>
                                            <ItemFigure>
                                                <ItemPicture>
                                                    <Reveal />
                                                    <img src={item.image} alt="" />
                                                    <img src={item.hover} alt="" />
                                                </ItemPicture>
                                            </ItemFigure>
                                            <ItemText>
                                                {item.name}
                                            </ItemText>
                                            <ItemClient>
                                                {item.client}
                                            </ItemClient>
                                        </Project>
                                    </IntersectionObserver>
                                </>
                            )
                        })}
                    </Grid>
                </GridB>
                <GridC>
                    <Grid>
                        {list.slice(4, 6).map((item, i) => { 
                            return (
                                <>
                                    <IntersectionObserver>
                                        <Project {...cursorHandlers}>
                                            <ItemFigure>
                                                <ItemPicture>
                                                    <Reveal />
                                                    <img src={item.image} alt="" />
                                                    <img src={item.hover} alt="" />
                                                </ItemPicture>
                                            </ItemFigure>
                                            <ItemText>
                                                {item.name}
                                            </ItemText>
                                            <ItemClient>
                                                {item.client}
                                            </ItemClient>
                                        </Project>
                                    </IntersectionObserver>
                                </>
                            )
                        })}
                    </Grid>
                </GridC>
                <GridD>
                    <Grid>
                        {list.slice(6, 8).map((item, i) => { 
                            return (
                                <>
                                    <IntersectionObserver>
                                        <Project {...cursorHandlers}>
                                            <ItemFigure>
                                                <ItemPicture>
                                                    <Reveal />
                                                    <img src={item.image} alt="" />
                                                    <img src={item.hover} alt="" />
                                                </ItemPicture>
                                            </ItemFigure>
                                            <ItemText>
                                                {item.name}
                                            </ItemText>
                                            <ItemClient>
                                                {item.client}
                                            </ItemClient>
                                        </Project>
                                    </IntersectionObserver>
                                </>
                            )
                        })}
                    </Grid>
                </GridD>
                <GridNormal>
                        {list.slice(8, 15).map((item, i) => { 
                            return (
                                <>
                                    <IntersectionObserver>
                                        <Project {...cursorHandlers}>
                                            <ItemFigure>
                                                <ItemPicture>
                                                    <Reveal />
                                                    <img src={item.image} alt="" />
                                                    <img src={item.hover} alt="" />
                                                </ItemPicture>
                                            </ItemFigure>
                                            <ItemText>
                                                {item.name}
                                            </ItemText>
                                            <ItemClient>
                                                {item.client}
                                            </ItemClient>
                                        </Project>
                                    </IntersectionObserver>
                                </>
                            )
                        })}
                </GridNormal>
                </Container>
            </WorksStyled>
            
            <Coding />
        </>
    )
}

export default Works;