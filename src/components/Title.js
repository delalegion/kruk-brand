import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";

import { IntersectionContext } from "hooks/useIntersection";
import { useContext } from "react";

const TitleStyled = styled(motion.h1)`
    font-size: 6.250vw;
    font-family: ${props => props.theme.semiBold};

    @media (min-width: 1920px) {
        font-size: 120px;
    }
    @media (max-width: 768px) {
        font-size: 13vw;
        margin-top: 0px;
    }
`

const Title = (props) => {

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
              duration: 1,
              delay: 0.4,
              ease: theme.bezier
          }
        }
    };

    return(
        <>
            <TitleStyled initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={variants}>{props.children}</TitleStyled>
        </>
    )
}

export default Title;