import { useContext } from 'react';
import styled, { ThemeContext } from "styled-components";
import Logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

import useCursorHandlers from "hooks/useCursorHandlers";
import { motion } from 'framer-motion';
import { IntersectionContext } from 'hooks/useIntersection';

const MenuStyled = styled(motion.ul)`
    display: flex;
    flex-direction: row;
    margin: 0;
    transform: all 0.2s linear;

    @media (max-width: 900px) {
        display: none;
        visibility: none;
    }

    & > li {
        display: flex;

        a {
            color: white;
            text-decoration: none;
            list-style-type: none;
            padding: 2rem;
            font-size: 23px;
            align-items: center;
            transition: all 0.2s ease;
        }
    }
`
const LogoStyled = styled(motion.img)`
    width: 45.781vw;

    @media (min-width: 768px) {
        width: 207px;
    }
`
const LinkStyled = styled(Link)`
    display: flex;
`

const Navbar = () => {

    const cursorHandlers = useCursorHandlers();
    const { inView } = useContext(IntersectionContext);
    const theme = useContext(ThemeContext);

    const variants = {
        closed: {
          transition: { staggerChildren: 0.3, delayChildren: 0.4 }
        },
        open: {
          transition: { staggerChildren: 0.3 }
        }
    };

    const variants_li = {
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
            <LinkStyled to="/" className="link hover-this" {...cursorHandlers}>
                    <LogoStyled initial="closed"
                    animate={inView ? "open" : "closed"}
                    variants={variants_li} custom={0}
                    src={Logo} alt="My personal logo which present head of raven on red background and title Hubert Kruk" />
            </LinkStyled>
            <MenuStyled initial="closed"
                    animate={inView ? "open" : "closed"}
                    variants={variants}>
                <motion.li variants={variants_li} custom={0}><Link to="/" className="link hover-this" {...cursorHandlers}>Home</Link></motion.li>
                <motion.li variants={variants_li} custom={1}><Link to="/works" className="link hover-this" {...cursorHandlers}>Works</Link></motion.li>
                <motion.li variants={variants_li} custom={2}><Link to="/contact" className="link hover-this" {...cursorHandlers}>Contact</Link></motion.li>
            </MenuStyled>
        </>
    )
}

export default Navbar;