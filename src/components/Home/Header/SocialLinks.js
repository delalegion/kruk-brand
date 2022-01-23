import { motion } from "framer-motion";
import { ThemeContext } from "styled-components";

import { IntersectionContext } from "hooks/useIntersection";
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
            <motion.li {...cursorHandlers} variants={variants} custom={pos}>
                <a href={data.url}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M15,7H3.41l5.3-5.29A1,1,0,0,0,7.29.29l-7,7a1,1,0,0,0-.21.33.92.92,0,0,0,0,.76,1,1,0,0,0,.21.33l7,7A1,1,0,0,0,8,16a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L3.41,9H15a1,1,0,0,0,0-2Z"/>
                    </svg>
                 {data.name}
                </a>
            </motion.li>
        </>
    )
}

export default SocialLinks;