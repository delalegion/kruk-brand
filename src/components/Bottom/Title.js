import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";

import { IntersectionContext } from "hooks/useIntersection";
import { useContext } from "react";

const TitleStyled = styled(motion.h2)`
    font-size: 3.125vw;
    font-family: ${props => props.theme.semiBold};
    opacity: 0;

    @media (min-width: 1650px) {
        font-size: 60px;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
        margin-top: 10px;
        margin-bottom: 30px;
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
            exit="hidden"
            variants={variants}>{props.children}</TitleStyled>
        </>
    )
}

export default Title;