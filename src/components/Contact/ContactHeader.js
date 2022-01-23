import AnimateTitle from "components/AnimatedTitle/AnimatedTitle";

import styled from 'styled-components';
import { Link } from 'react-scroll';
import ScrollButton from "components/Contact/ScrollButton";
import { IntersectionObserver } from "hooks/useIntersection";

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
                    <ScrollButton />
                </IntersectionObserver>
            </Scroll>
        </>
    )
}

export default Header;