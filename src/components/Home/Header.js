import styled from 'styled-components';
import Photo from '../../assets/hubert.png';
import Line from '../../assets/hubert_line_3.svg';

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 70px;
    position: relative;
`
const TextStyled = styled.section`
    font-size: 15vw;
    font-family: ${props => props.theme.semiBold};
    padding: 4.688vw 0;
    line-height: 1em;
    flex: 1 1;

    @media (min-width: 768px) {
        font-size: 6.250vw;
    }
    @media (min-width: 1920px) {
        font-size: 120px;
        padding: 90px 0;
    }
`
const ProfStyled = styled.div`
    line-height: 1.2em;
    font-size: 8vw;
    color: #757575;
    text-align: right;
    font-family: ${props => props.theme.medium};
    margin-top: 30px;

    @media (max-width: 768px) {
        margin-top: 10px;
        text-align: left;
    }
    @media (min-width: 768px) {
        font-size: 4.427vw;
    }
    @media (min-width: 1920px) {
        font-size: 85px;
    }
`
const PhotoStyled = styled.section`
    justify-content: center;
    flex: 1 1;
    display: flex;

    @media (max-width: 768px) {
        top: 10px;
        right: -20px;
        position: absolute;
        z-index: -1;
    }
    /* height: 730px; */
`
const PhotoBox= styled.div`
    background-color: ${props => props.theme.primary};
    position: relative;
    display: flex;
    width: 20.833vw;
    height: 39.063vw;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 768px) {
        width: 24.833vw;
        height: 52.063vw;
    }
    @media (min-width: 1920px) {
        height: 750px;
        width: 400px;
    }

    & > img.photo {
        height: 36.458vw;
        position: relative;

        @media (max-width: 768px) {
            height: 47.458vw;
        }
        @media (min-width: 1920px) {
            height: 700px;
        }
    }
    & > img.line {
        position: absolute;
        top: 3.333vw;
        right: -48.750vw;
        width: 45.313vw;

        @media (max-width: 768px) {
            display: none;
            visibility: hidden;
        }
        @media (min-width: 1920px) {
            height: 870px;
            right: -956px;
            top: 64px;
            width: unset;
        }
    }
`
const SocialStyled = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0px;
    margin-left: 35px;
    margin: 0;
    line-height: 0.8em;

    @media (max-width: 768px) {
        margin-left: 0;
        justify-content: flex-start;
    }
    & > li {
        list-style-type: none;
        padding: 0px 15px;
        font-size: 4vw;
        font-family: ${props => props.theme.medium};

        @media (min-width: 768px) {
            font-size: 1.094vw;
        }
        @media (min-width: 1920px) {
            font-size: 21px;
            margin: 0px;
        }

        & > a {
            display: flex;
            align-items: center;

            &:hover {
                cursor: pointer;
                color: ${props => props.theme.primary};
                transition: ${props => props.theme.animationSecond};
                & > svg {
                    transform: rotate(135deg);
                    transition: ${props => props.theme.animationSecond};
                    & > path { fill: ${props => props.theme.primary}; }
                }
            }

            & > svg {
                transition: ${props => props.theme.animationSecond};
                margin-right: 10px;
                width: 3vw;
                transform: rotate(180deg);
                fill: ${props => props.theme.grey};

                @media (min-width: 768px) {
                    width: 0.938vw;
                }
                @media (min-width: 1920px) {
                    width: 18px;
                }
            }
        }
    }
`

const Header = () => {
    return(
        <>
            <HeaderStyled>
                <TextStyled>
                    Hi there. <br/>
                    I am Hubert
                    <ProfStyled>
                        ui designer <br />
                        & frontend dev
                    </ProfStyled>
                    <SocialStyled>
                        <li><a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M15,7H3.41l5.3-5.29A1,1,0,0,0,7.29.29l-7,7a1,1,0,0,0-.21.33.92.92,0,0,0,0,.76,1,1,0,0,0,.21.33l7,7A1,1,0,0,0,8,16a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L3.41,9H15a1,1,0,0,0,0-2Z"/>
                        </svg>
                            Dribbble</a></li>
                        <li><a>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M15,7H3.41l5.3-5.29A1,1,0,0,0,7.29.29l-7,7a1,1,0,0,0-.21.33.92.92,0,0,0,0,.76,1,1,0,0,0,.21.33l7,7A1,1,0,0,0,8,16a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L3.41,9H15a1,1,0,0,0,0-2Z"/>
                        </svg>
                            Behance</a></li>
                        <li><a>
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M15,7H3.41l5.3-5.29A1,1,0,0,0,7.29.29l-7,7a1,1,0,0,0-.21.33.92.92,0,0,0,0,.76,1,1,0,0,0,.21.33l7,7A1,1,0,0,0,8,16a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L3.41,9H15a1,1,0,0,0,0-2Z"/>
                        </svg>
                            Linkedin</a></li>
                    </SocialStyled>
                </TextStyled>
                <PhotoStyled>
                    <PhotoBox>
                        <img src={Photo} className="photo" alt="Photo of myself" />
                        <img src={Line} className="line" alt="" />
                    </PhotoBox>
                </PhotoStyled>
            </HeaderStyled>
        </>
    )
}

export default Header;