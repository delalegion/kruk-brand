import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";

import { IntersectionContext } from "hooks/useIntersection";
import { useContext } from "react";

const WelcomeTextStyled = styled(motion.div)`
    line-height: 1em;
    font-size: 15vw;
    margin: 0;
    
    @media (min-width: 768px) {
        font-size: 6.250vw;
    }
    @media (min-width: 1920px) {
        font-size: 120px;
        /* padding: 90px 0; */
    }
`

const WelcomeText = (props) => {

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
              ease: theme.bezier
          }
        }
    };

    return(
        <>
            <WelcomeTextStyled initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={variants}>
                    {props.children}
            </WelcomeTextStyled>
        </>
    )
}

export default WelcomeText;