import styled from 'styled-components';

import { IntersectionObserver } from 'hooks/useIntersection';
import WelcomeText from './WelcomeText';
import SubtitleText from './SubtitleText';
import SocialHub from './SocialHub';
import Photo from './Photo';

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 100px;
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
`


const Header = () => {
    
    return(
        <>
            <HeaderStyled>
                <TextStyled>
                    <IntersectionObserver>
                        <WelcomeText>
                            Hi there. <br/>
                            I am Hubert
                        </WelcomeText>
                    </IntersectionObserver>
                    <IntersectionObserver>
                        <SubtitleText>
                            ui designer <br />
                            & frontend dev
                        </SubtitleText>
                    </IntersectionObserver>
                    <IntersectionObserver>
                        <SocialHub />
                    </IntersectionObserver>
                </TextStyled>
                <PhotoStyled>
                    <IntersectionObserver>
                            <Photo />
                    </IntersectionObserver>
                </PhotoStyled>
            </HeaderStyled>
        </>
    )
}

export default Header;