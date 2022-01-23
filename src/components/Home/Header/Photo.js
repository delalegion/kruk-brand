import { motion, useAnimation } from "framer-motion";
import styled, { ThemeContext } from "styled-components";
import PhotoImage from 'assets/hubert.png';
import Line from 'assets/hubert_line_3.svg';

import { useContext } from "react";
import { IntersectionContext } from "hooks/useIntersection";

const PhotoBox= styled(motion.div)`
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
            margin-top: 15px;
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

const Photo = () => {

    const theme = useContext(ThemeContext);
    const { inView } = useContext(IntersectionContext);

    const variants = {
        hidden: {
          height: "0%",
          transition: {
            duration: 1,
            ease: theme.bezier
          }
        },
        show: {
            height: "100%",
            transition: {
              duration: 1,
              delay: 0.4,
              ease: theme.bezier
            }
        },
        noentered: {
            opacity: 0,
            transition: {
                delay: 1.1,
                duration: 1,
            }
        },
        entered: {
            opacity: 1,
            transition: {
                delay: 1.2,
                duration: 1,
            }
        },
        line: {

        }
    };
    const imageControl = useAnimation();
    const lineControl = useAnimation();
      
    return(
        <>
            <PhotoBox initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={variants}
            onAnimationComplete={() => {
                imageControl.start("entered");
            }}>
                <motion.img src={PhotoImage} className="photo" alt="Photo of myself" animate={imageControl} variants={variants} animate={inView ? "entered" : "noentered"} initial="noentered" />
                <img src={Line} className="line" alt="Decorate" animate={lineControl} variants={variants} initial="" />
            </PhotoBox>
        </>
    )
}

export default Photo;