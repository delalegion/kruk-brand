import { motion } from "framer-motion";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Skill = ({ data, pos }) => {

    const theme = useContext(ThemeContext);

    const variants = {
        open: pos => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: pos * 0.07,
                ease: theme.bezier
            }
        }),
        closed: {
            y: 40,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: theme.bezier
            }
        }
    };


    return(
        <>
            <motion.p variants={variants} custom={pos}>{data}</motion.p>
        </>
    )
}

export default Skill;