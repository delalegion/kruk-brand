import styled, { ThemeContext } from 'styled-components';
import AnimatedTitle from 'components/AnimatedTitle/AnimatedTitle';
import { IntersectionObserver } from 'hooks/useIntersection';
import ScrollText from 'components/ScrollText';
import ScrollButton from 'components/ScrollButton';
import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import useScrollPosition from 'hooks/useScrollPosition';
import Container from 'components/Container';
import { AnimationContext } from "providers/AnimationContext";

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
const ImageCover = styled.div`
    height: 600px;
    margin-top: 100px;
`
const ItemPicture = styled(motion.picture)`
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    & > img {
        width: 110%;
        -o-object-fit: cover;
        object-fit: cover;
        font-family: "object-fit: cover";
        height: calc(100% + 2px);
        bottom: auto;
        transition: ${props => props.theme.animationSecond};
        float: right;
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
const ItemFigure = styled(motion.figure)`
    background: hsla(0,0%,100%,.05);
    display: block;
    position: relative;
    height: 100%;
    margin: 0;
    overflow: hidden;
`

const Header = ({ data }) => {

    const theme = useContext(ThemeContext);
    const [, , runAnimation,setRunAnimation] = useContext(AnimationContext);
    
    const [run, setRun] = useState(0);
    const figureControl = useAnimation();
    const pictureControl = useAnimation();
    const scroll = useScrollPosition();

    useEffect(() => {
        if (runAnimation) {
            if (scroll > 200) {
                if (run == 0){
                    setRun(1);
                    figureControl.start({
                        x: 0,
                        transition: { duration: 1.7, ease: theme.bezier },
                    })
                    pictureControl.start({
                        x: 30,
                        transition: { duration: 3.2, ease: theme.bezier },
                    })
                }
            }
        }
    }, [scroll])

    return(
        <>
   
                <IntersectionObserver>
                    <AnimatedTitle title={data.client} />
                </IntersectionObserver>
                <Scroll>
                    <IntersectionObserver>
                        <ScrollButton to="photos" />
                    </IntersectionObserver>
                    <Intersection>
                        <IntersectionObserver>
                            <ScrollText>
                                During my two years of experience i created dozens of projects for many clients belong various industries that I can now boast of. In the second section i presents my coding stuff, websites that i maked and apps that i am currently work. 
                            </ScrollText>
                        </IntersectionObserver>
                    </Intersection>
                </Scroll>
    
            <ImageCover>
                <ItemFigure animate={figureControl} initial={{ x: 720 }} >
                    <ItemPicture>
                        <motion.img src={data.image} alt="" animate={pictureControl} initial={{ x: 150 }} />
                    </ItemPicture>
                </ItemFigure>
            </ImageCover>
        </>
    )
}

export default Header;