import AnimateTitle from "components/AnimatedTitle/AnimatedTitle";

import styled from 'styled-components';
import { IntersectionObserver } from "hooks/useIntersection";
import ScrollButton from "components/ScrollButton";

const Scroll = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-start;
    margin-left: 200px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        top: -30px;
    }
`

const Header = () => {
    return(
        <>
            <IntersectionObserver>
                <AnimateTitle title="Any questions? Feel free to ask! 🤩" />
            </IntersectionObserver>
            <Scroll>
                <IntersectionObserver>
                    <ScrollButton to="contact" />
                </IntersectionObserver>
            </Scroll>
        </>
    )
}

export default Header;