import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";
import { IntersectionContext } from "hooks/useIntersection";

const ScrollTextStyled = styled(motion.p)`
    font-size: 1.250vw;
    color: ${props => props.theme.grey};
    font-weight: 600;

    @media (min-width: 1920px) {
        font-size: 24px;
    }
    @media (max-width: 768px) {
        font-size: 3.125vw;
        max-width: 100%;
        margin: 0;
        margin-top: 10px;
    }
`

const ScrollText = (props) => {

    const theme = useContext(ThemeContext);
    const { inView } = useContext(IntersectionContext);

    const variants = {
        hidden: {
            y: 100,
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
                ease: theme.bezier
            }
        }
    };
      
    return(
        <>
            <ScrollTextStyled initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={variants}>
                {props.children}
            </ScrollTextStyled>
        </>
    )
}

export default ScrollText;