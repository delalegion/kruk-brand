import styled from "styled-components";

import Project1 from "../../assets/projects/1.png";
import Project2 from "../../assets/projects/2.png";
import Project3 from "../../assets/projects/3.png";
import Project4 from "../../assets/projects/4.png";
import Project5 from "../../assets/projects/5.png";
import Project6 from "../../assets/projects/6.png";
import Arrow from "../../assets/arrow_2.svg";

import Container from "components/Container";

const WorksStyled = styled.section`
    margin: 11.806vw 6.25vw;
`
const Grid = styled.div`
    display: grid;
    position: relative;
    margin-bottom: 0.694vw;
    grid-column-gap: 0.694vw;
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 50px;
`
const GridNormal = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.646vw;
    grid-auto-rows: 1fr;
    margin-top: 150px;

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
`
const Project = styled.article`
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
    }
    &:hover ${ItemPicture} {
        & > img {
            transform: scale(1.1);
        }
    }
`
const GridA = styled.div`
    position: relative;

    & > ${Grid} > ${Project}:nth-child(1) {
        grid-column: 2/7;
    }
    & > ${Grid} > ${Project}:nth-child(2) {
        grid-column: 8/12;
    }
`
const GridB = styled.div`
    position: relative;

    & > ${Grid} > ${Project}:nth-child(1) {
        grid-column: 1/6;
    }
    & > ${Grid} > ${Project}:nth-child(2) {
        grid-column: 7/11;
        margin-top: 50px;
    }
`
const GridC = styled.div`
    position: relative;

    & > ${Grid} > ${Project}:nth-child(1) {
        grid-column: 3/7;
        margin-top: 30px;
    }
    & > ${Grid} > ${Project}:nth-child(2) {
        grid-column: 10/13;
    }
`
const GridD = styled.div`
    position: relative;

    & > ${Grid} > ${Project}:nth-child(1) {
        grid-column: 1/5;
        margin-top: 50px;
    }
    & > ${Grid} > ${Project}:nth-child(2) {
        grid-column: 7/12;
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
    }
    @media (max-width: 500px) {
        font-size: 4.546vw;  
        margin-bottom: 10px;
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
        font-size: 3.990vw;
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
const CodingStyled = styled.section`
    margin-top: 100px;
    padding: 50px 0;
`
const CodingItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 2px solid #202020;
    color: ${props => props.theme.grey};
    transition: ${props => props.theme.animation};

    &:hover {
        padding-bottom: 38px;
        border-bottom: 4px solid ${props => props.theme.primary};
    }
`
const CodingButton = styled.a`
    display: flex;
    flex-direction: row;
    font-size: 25px;
    align-items: center;
    letter-spacing: 1.5px;
    transition: ${props => props.theme.animation};
    color: ${props => props.theme.grey};
    text-decoration: none;

    &:hover {
        color: white;
        cursor: pointer;
        & > svg {
            & > path { transition: ${props => props.theme.animation}; }
            & > path:nth-child(1) {
                fill: white;
            }
            & > path:nth-child(2) {
                stroke: white;
            }
        }
    }
    & > svg {
        transition: ${props => props.theme.animation};
        margin-left: 10px;
        & > path { transition: ${props => props.theme.animation}; }
    }
    &:nth-child(2) {
        margin-left: 40px;
    }
`
const CodingButtons = styled.div`
    display: flex;
    flex-direction: row;
`
const Github = styled.div`
    margin-bottom: 50px;
`

const Works = () => {
    return(
        <>
            <WorksStyled id="works">
                <Container>
                <GridA>
                    <Grid>
                        <Project>
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
                        {/* ----------------------------- */}
                        <Project>
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
                        <Project>
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
                        <Project>
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
                        <Project>
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
                        <Project>
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
                        <Project>
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
                        <Project>
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
                    <Project>
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
                    <Project>
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
                    <Project>
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
                    <Project>
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
                    <Project>
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
                    <Project>
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

                <CodingStyled>
                    <Title>Coding</Title>
                    <div className="row">
                        <div className="col_l_8 col_l_4_offset">
                            <Github>
                                <CodingButton href="https://www.github.com/delalegion">Github profile <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" stroke-width="3" stroke-linecap="square"/></svg></CodingButton>
                            </Github>
                            <CodingItem>
                                Personal website code
                                <CodingButtons>
                                    <CodingButton href="#">CODE <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" stroke-width="3" stroke-linecap="square"/></svg></CodingButton>
                                    <CodingButton href="#">LIVE <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" stroke-width="3" stroke-linecap="square"/></svg></CodingButton>
                                </CodingButtons>
                            </CodingItem>
                            <CodingItem>
                                Logistics company website
                                <CodingButtons>
                                    <CodingButton href="#">CODE <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" stroke-width="3" stroke-linecap="square"/></svg></CodingButton>
                                    <CodingButton href="#">LIVE <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" stroke-width="3" stroke-linecap="square"/></svg></CodingButton>
                                </CodingButtons>
                            </CodingItem>
                            <CodingItem>
                                Marketing company website
                                <CodingButtons>
                                    <CodingButton href="#">LIVE <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" stroke-width="3" stroke-linecap="square"/></svg></CodingButton>
                                </CodingButtons>
                            </CodingItem>
                            <CodingItem>
                                Old real estate company website
                                <CodingButtons>
                                    <CodingButton href="#">LIVE <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" stroke-width="3" stroke-linecap="square"/></svg></CodingButton>
                                </CodingButtons>
                            </CodingItem>
                        </div>
                    </div>
                </CodingStyled>
                </Container>
            </WorksStyled>
        </>
    )
}

export default Works;