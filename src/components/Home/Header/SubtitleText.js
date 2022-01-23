import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";

import { IntersectionContext } from "hooks/useIntersection";
import { useContext } from "react";

const SubtitleTextStyled = styled(motion.div)`
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

const SubtitleText = (props) => {

    const { inView } = useContext(IntersectionContext);
    const theme = useContext(ThemeContext);

    const variants = {
        hidden: {
          y: -100,
          opacity: 0,
          transition: {
            duration: 1,
            ease: theme.bezier
          }
        },
        show: {
          y: 0,
          opacity: 1,
          transition: {
              delay: 0.3,
              duration: 1,
              ease: theme.bezier
          }
        }
    };

    return(
        <>
            <SubtitleTextStyled initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={variants}>
                    {props.children}
            </SubtitleTextStyled>
        </>
    )
}

export default SubtitleText;