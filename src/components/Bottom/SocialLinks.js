import { motion } from "framer-motion";
import { ThemeContext } from "styled-components";

import { useContext } from "react";
import useCursorHandlers from "hooks/useCursorHandlers";

const SocialLinks = ({ data, pos }) => {

    const theme = useContext(ThemeContext);
    const cursorHandlers = useCursorHandlers();

    const variants = {
        open: pos => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: pos * 0.2,
                ease: theme.bezier
            }
        }),
        closed: {
            y: 40,
            opacity: 0,
            transition: {
                duration: 1,
                ease: theme.bezier
            }
        }
    };

    return(
        <>
            <motion.p {...cursorHandlers} variants={variants} custom={pos}>
                <a href={data.url}>
                    <span>{data.name}</span>
                </a>
            </motion.p>
        </>
    )
}

export default SocialLinks;