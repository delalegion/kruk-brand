import { motion } from "framer-motion";
import styled from "styled-components";

const animations = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
}
const Background = styled(motion.div)`
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0%;
    right: 0;
    z-index: 1000;
    background: ${props => props.theme.primary};
`
const PageTransition = ({children}) => {
    return(
        <>
            {/* <Background initial={{left: "100%"}} animate={{left: "100%"}} exit={{left: "0%"}} transition={{duration: 0.3}} />
            <Background initial={{width: "100%"}} animate={{width: "0%"}} exit={{width: "0%"}} transition={{duration: 0.3}} /> */}
            <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{duration: 1}}>
                {children}
            </motion.div>
        </>
    )
}

export default PageTransition;