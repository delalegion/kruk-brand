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
    & > .line {
        position: absolute;
        top: 3.333vw;
        right: -7.75vw;
        width: 4.413vw;
        overflow: visible;
        stroke: #636363;
        stroke-width: 2.5;
        stroke-linejoin: round;
        stroke-linecap: round;
        fill: transparent;

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
            opacity: 1,
            pathLength: 1,
        },
        hide_line: {
            opacity: 0,
            pathLength: 0,
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
                {/* <img src={Line} className="line" alt="Decorate" animate={lineControl} variants={variants} initial="" /> */}
                <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="line">
                    <motion.path d="M1156.3 580.356C950.431 578.568 1263.44 258.112 1007.26 253.068C751.077 248.025 915.275 440.656 664.444 440.656C479.999 440.656 652.343 60.6746 483.73 9.44685C322.914 -39.4479 441.797 167.768 295.555 185.468C149.313 203.168 234.087 83.0264 136.457 43.9107C38.8276 4.79487 33.3222 59.8922 42.6422 88.9218C51.9622 117.951 39.107 126.18 42.3348 140.303C45.5626 154.427 41.6082 186.041 41.3707 195.247C41.1331 204.453 49.517 202.93 51.7247 212.598C53.7199 221.516 52.3095 230.858 47.7703 238.791C43.6902 246.014 39.5122 263.588 36.8294 276.859C34.1466 290.131 20.8722 285.479 20.8722 285.479C20.8722 285.479 20.6765 317.26 11.3984 325.642C2.1203 334.024 -2.07162 348.916 7.2065 354.043C16.4846 359.17 28.6831 389.443 31.9388 399.683C35.1946 409.923 166.08 460.214 189.835 475.581C213.589 490.948 226.151 557.068 232.676 575.229C239.201 593.39 236.407 623.676 258.764 726.579C281.121 829.481 276.809 798.316 265.75 850.911C254.691 903.506 438.809 951.316 375.309 1014.82C274.309 1115.82 525.809 1195.82 525.809 1014.82"
                        variants={variants}
                        initial="hide_line"
                        animate={inView ? "line" : ""}
                        transition={{
                        default: { duration: 3, ease: "easeInOut" },
                        }}
                    />
                </motion.svg>
            </PhotoBox>
        </>
    )
}

export default Photo;