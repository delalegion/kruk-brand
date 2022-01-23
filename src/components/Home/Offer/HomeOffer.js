import styled from "styled-components";
import ImageFirst from "assets/what_2.svg";
import ImageSecond from "assets/what_1.svg";
import ImageThird from "assets/what_3.svg";

import { IntersectionObserver } from "hooks/useIntersection";

import Reveal from "components/Reveal";
import Title from "components/Title";

const OfferStyled = styled.section`
    padding: 50px 0;
    margin-top: 100px;

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

    & > div:nth-child(2) {
        margin-top: 100px;
        @media (max-width: 500px) {
            margin-top: 0;
        }
    }
    & > div:nth-child(3) {
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

const Offer = () => {

    let offers_Array = [
        {
            "image": ImageThird,
            "title": "I'm doing modern websites"
        },
        {
            "image": ImageFirst,
            "title": "I'm making new image for brands"
        },
        {
            "image": ImageSecond,
            "title": "I'm designing things to web and print"
        }
    ]

    return(
        <>
            <OfferStyled>

            <IntersectionObserver>
                <Title>What i do</Title>
            </IntersectionObserver>
            <GridStyled>
                {offers_Array.map((item, key) => (
                    <IntersectionObserver key={key}>
                        <GridItem>
                            <GridItemBox>
                                <Reveal />
                                <img src={item.image} alt="" />
                            </GridItemBox>
                            <GridItemText>
                                {item.title}
                            </GridItemText>
                        </GridItem>
                    </IntersectionObserver>
                ))}
            </GridStyled>
            {/* {[...Array(6).keys()].map((item, key) => (
                <IntersectionObserver key={key}>
                    <ScaleBox>{item + 1}</ScaleBox>
                </IntersectionObserver>
            ))} */}
            </OfferStyled>
        </>
    )
}

export default Offer;