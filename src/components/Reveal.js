import { motion } from "framer-motion";
import { IntersectionContext } from "hooks/useIntersection";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const RedReveal = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    height: 100%;
    background: ${props => props.theme.primary};
`

const Reveal = () => {

    const { inView } = useContext(IntersectionContext);
    const theme = useContext(ThemeContext);

    const variants = {
        hidden: {
          height: "100%",
          transition: {
            duration: 1,
            ease: theme.bezier
          }
        },
        show: {
          height: "0%",
          transition: {
              duration: 1,
              delay: 0.4,
              ease: theme.bezier
          }
        }
      };

    return(
        <>
       <RedReveal  initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={variants} /> 
        </>
    )
}

export default Reveal;