import styled from 'styled-components';
import AnimatedTitle from 'components/AnimatedTitle/AnimatedTitle';
import { IntersectionObserver } from 'hooks/useIntersection';
import ScrollText from 'components/ScrollText';
import ScrollButton from 'components/ScrollButton';

const Scroll = styled.div`
    display: flex;
    position: relative;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        top: -30px;
    }
`
const Intersection = styled.div`
    max-width: 40%;
`

const Header = () => {

    return(
        <>
            <IntersectionObserver>
                <AnimatedTitle title="Check out my latest projects" />
            </IntersectionObserver>
            <Scroll>
            <IntersectionObserver>
                <ScrollButton to="works" />
            </IntersectionObserver>
            <Intersection>
                <IntersectionObserver>
                    <ScrollText>
                        During my two years of experience i created dozens of projects for many clients belong various industries that I can now boast of. In the second section i presents my coding stuff, websites that i maked and apps that i am currently work. 
                    </ScrollText>
                </IntersectionObserver>
            </Intersection>
            </Scroll>
        </>
    )
}

export default Header;