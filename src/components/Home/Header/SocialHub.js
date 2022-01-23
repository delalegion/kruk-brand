import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";

import { IntersectionContext } from "hooks/useIntersection";
import { useContext } from "react";
import useCursorHandlers from "hooks/useCursorHandlers";
import SocialLinks from "./SocialLinks";

const SocialStyled = styled(motion.ul)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0px;
    margin-left: 35px;
    margin: 0;
    line-height: 0.8em;

    @media (max-width: 768px) {
        margin-left: 0;
        justify-content: flex-start;
    }
    & > li {
        list-style-type: none;
        padding: 0px 15px;
        font-size: 4vw;
        font-family: ${props => props.theme.medium};

        @media (min-width: 768px) {
            font-size: 1.094vw;
        }
        @media (min-width: 1920px) {
            font-size: 21px;
            margin: 0px;
        }

        & > a {
            display: flex;
            align-items: center;
            color: white;
            text-decoration: none;

            &:hover {
                cursor: pointer;
                color: ${props => props.theme.primary};
                transition: ${props => props.theme.animationSecond};
                & > svg {
                    transform: rotate(135deg);
                    transition: ${props => props.theme.animationSecond};
                    & > path { fill: ${props => props.theme.primary}; }
                }
            }

            & > svg {
                transition: ${props => props.theme.animationSecond};
                margin-right: 10px;
                width: 3vw;
                transform: rotate(180deg);
                fill: ${props => props.theme.grey};

                @media (min-width: 768px) {
                    width: 0.938vw;
                }
                @media (min-width: 1920px) {
                    width: 18px;
                }
            }
        }
    }
`

const SocialHub = (props) => {

    const { inView } = useContext(IntersectionContext);

    const variants = {
        closed: {
          transition: { staggerChildren: 0.3, delayChildren: 0.4 }
        },
        open: {
          transition: { staggerChildren: 0.3 }
        }
      };

    const links = [
        {
            url: "https://www.dribbble.com/hubkruczek",
            name: "Dribbble"
        },
        {
            url: "https://www.behance.com/hubkruczek",
            name: "Behance"
        },
        {
            url: "https://www.linkedin.com/in/hubert-kruk/",
            name: "Linkedin"
        },
    ]

    return(
        <>
            <SocialStyled initial="closed"
                    animate={inView ? "open" : "closed"}
                    variants={variants}>
                    {links.map((item, i) => {
                        return <SocialLinks key={i} data={item} pos={i} />
                    })}
            </SocialStyled>
        </>
    )
}

export default SocialHub;



/**   <motion.li {...cursorHandlers} variants={variants}>
                            <a href="https://www.dribbble.com/hubkruczek">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M15,7H3.41l5.3-5.29A1,1,0,0,0,7.29.29l-7,7a1,1,0,0,0-.21.33.92.92,0,0,0,0,.76,1,1,0,0,0,.21.33l7,7A1,1,0,0,0,8,16a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L3.41,9H15a1,1,0,0,0,0-2Z"/>
                                </svg>
                                Dribbble
                            </a>
                        </motion.li>
                        <motion.li {...cursorHandlers} variants={variants}>
                            <a href="https://www.behance.com/hubkruczek">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M15,7H3.41l5.3-5.29A1,1,0,0,0,7.29.29l-7,7a1,1,0,0,0-.21.33.92.92,0,0,0,0,.76,1,1,0,0,0,.21.33l7,7A1,1,0,0,0,8,16a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L3.41,9H15a1,1,0,0,0,0-2Z"/>
                                </svg>
                                Behance
                            </a>
                        </motion.li>
                        <motion.li {...cursorHandlers} variants={variants}>
                            <a href="https://www.linkedin.com/in/hubert-kruk/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M15,7H3.41l5.3-5.29A1,1,0,0,0,7.29.29l-7,7a1,1,0,0,0-.21.33.92.92,0,0,0,0,.76,1,1,0,0,0,.21.33l7,7A1,1,0,0,0,8,16a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L3.41,9H15a1,1,0,0,0,0-2Z"/>
                                </svg>
                                Linkedin
                            </a>
                        </motion.li> */