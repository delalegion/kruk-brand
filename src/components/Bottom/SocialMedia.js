import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";

import { IntersectionContext } from "hooks/useIntersection";
import { useContext } from "react";
import SocialLinks from "components/Bottom/SocialLinks";
import useCursorHandlers from "hooks/useCursorHandlers";

const SocialTitle = styled(motion.h3)`
    font-size: 2.604vw;
    font-family: ${props => props.theme.semiBold};
    margin-bottom: 15px;

    @media (min-width: 1920px) {
        font-size: 50px;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
        margin-top: 10px;
        margin-bottom: 15px;
    }
`
const SocialItems = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    

    @media (min-width: 1024px) {
        & > p {
            overflow: hidden;
            margin: 1.5vw 0;
            transition: ${props => props.theme.animation};
        }
    }
    @media (max-width: 1024px) {
        & > p {
            margin: 0;
            margin-bottom: 2vw;
            transition: ${props => props.theme.animation};
        }
    }

    & > p {
        transform: translate(0px, -40px);
        opacity: 0;
    }
    & > p > a {
        font-size: 1.563vw;
        margin-right: 50px;
        color: #b2b2b2;
        transition: ${props => props.theme.animation};

        @media (min-width: 1920px) {
            font-size: 30px;
        }
        @media (max-width: 768px) {
            font-size: 4vw;
        }

        &:hover {
            color: white;
            transition: ${props => props.theme.animation};
        }
    }
`
const EmailTitle = styled(motion.h4)`
    font-size: 1.563vw;
    color: white;
    font-family: ${props => props.theme.semiBold};

    @media (min-width: 1920px) {
        font-size: 30px;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
    }
`
const Email = styled(motion.p)`
    font-size: 1.563vw;

    & > a {
        color: #b2b2b2;
        text-decoration: none;
    }
    @media (min-width: 1920px) {
        font-size: 30px;
    }
    @media (max-width: 768px) {
        font-size: 4vw;
    }
`

const SocialMedia = (props) => {

    const { inView } = useContext(IntersectionContext);
    const theme = useContext(ThemeContext);
    const cursorHandlers = useCursorHandlers();

    const variants = {
        closed: {
          transition: { staggerChildren: 0.3, delayChildren: 0.4 }
        },
        open: {
          transition: { staggerChildren: 0.3 }
        }
    };
    const variantsTitle = {
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
        {
            url: "https://www.github.com/delalegion",
            name: "Github"
        },
        {
            url: "https://www.m.me/krukhubert",
            name: "Messenger"
        },
    ]

    return(
        <>
            <SocialTitle initial="hidden" animate={inView ? "show" : "hidden"} variants={variantsTitle}>Social media</SocialTitle>
            <SocialItems initial="closed"
                    animate={inView ? "open" : "closed"}
                    variants={variants}>
                    {links.map((item, i) => {
                        return <SocialLinks key={i} data={item} pos={i} />
                    })}
                {/* <p><a className="hover-this" href="https://www.dribbble.com/hubkruczek" {...cursorHandlers}><span>Dribbble</span></a></p>
                <p><a className="hover-this" href="https://www.behance.com/hubkruczek" {...cursorHandlers}><span>Behance</span></a></p>
                <p><a className="hover-this" href="https://www.linkedin.com/in/hubert-kruk/" {...cursorHandlers}><span>Linkedin</span></a></p>
                <p><a className="hover-this" href="https://www.github.com/delalegion" {...cursorHandlers}><span>Github</span></a></p>
                <p><a className="hover-this" href="https://www.m.me/krukhubert" {...cursorHandlers}><span>Messenger</span></a></p> */}
            </SocialItems>
            <EmailTitle initial="hidden" animate={inView ? "show" : "hidden"} variants={variantsTitle}>Email</EmailTitle>
            <Email initial="hidden" animate={inView ? "show" : "hidden"} variants={variantsTitle}><a href="mailto:hkrukcontact@gmail.com" {...cursorHandlers}>hkrukcontact@gmail.com</a></Email>
        </>
    )
}

export default SocialMedia;