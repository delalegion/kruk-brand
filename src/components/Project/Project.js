import styled from 'styled-components';
import Reveal from 'components/Reveal';
import { IntersectionObserver } from "hooks/useIntersection";
import useCursorHandlers from 'hooks/useCursorHandlers';
import { Link } from 'react-router-dom';

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
    margin: 40px 0;
    overflow: hidden;

    &:nth-child(2),
    &:nth-child(5) {
        background: red;
    }
`
const ContainerStyled = styled.div`
  max-width: 1620px;
  margin: 0 auto;
  padding-left: 140px;
  padding-right: 140px;


  @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
  }
`
const SocialBox = styled.div`
    width: 170px;
    height: 170px;
    margin: 0 -10px;
    position: relative;
    display: flex;
`
const Intro = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const SocialCircle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #2a2a2a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    transition: ${props => props.theme.animation};
    color: white;

    &:hover {
        background: #fff;
        transition: ${props => props.theme.animation};
        top: -10px;
        left: -10px;
        bottom: -10px;
        right: -10px;
        color: black;
        z-index: 10;
    }
`
const Socials = styled.div`
    display: flex;
    flex-direction: row;
    margin: 80px 0;
`
const Intersection = styled.div`
    max-width: 40%;
    margin-right: 100px;
    margin-top: 200px;
`

const Project = ({ data }) => {

    const cursorHandlers = useCursorHandlers();

    return(
        <>
            <ContainerStyled id="photos">
                <Intro>
                    <Socials>
                        {data.social.map((item) => (
                            <>
                                <Link to={item.url}>
                                    <SocialBox {...cursorHandlers}>
                                        <SocialCircle>{item.name}</SocialCircle>
                                    </SocialBox>
                                </Link>
                            </>
                        ))}
                    </Socials>
                </Intro>
                {data.photos.map((item, key) => (
                    <IntersectionObserver key={key}>
                        <ItemFigure>
                            <ItemPicture>
                                <Reveal />
                                <img src={item} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                    </IntersectionObserver>
                ))}
            </ContainerStyled>
        </>
    )
}

export default Project;