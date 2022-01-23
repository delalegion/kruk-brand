import { useContext, useState } from 'react';
import styled from "styled-components";
import Logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import Menu from "./Menu";

import useCursorHandlers from "hooks/useCursorHandlers";
import { motion, useAnimation } from 'framer-motion';
import { IntersectionContext, IntersectionObserver } from 'hooks/useIntersection';
import { useEffect } from 'react/cjs/react.development';

const NavbarStyled = styled.nav`
    padding-top: 40px;
    
    & > div {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        padding-top: 20px;
    }
    @media (max-width: 900px) {
        display: flex;
        justify-content: space-between;
    }
`
const MenuButtonStyled = styled.div`
    display: none;
    visibility: hidden;
    justify-content: center;
    z-index: 101;
    transition: ${props => props.theme.animation};

    svg > .path_menu_1, .path_menu_2 {
        transition: ${props => props.theme.animation};
    }
    @media (max-width: 900px) {
        display: flex;
        visibility: visible;
    }
    &.open {
        svg > rect {
            fill: none;
        }
        svg > .path_menu_1 {
            transition: ${props => props.theme.animation};
            transform: translate(19px,-12px) rotate(45deg);
        }
        svg > .path_menu_2 {
            transition: ${props => props.theme.animation};
            transform: translate(-8px,19px) rotate(-45deg);
        }
    }
`
const MenuMobileStyled = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #E61E29;
    z-index: 100;
    flex-direction: column;
    z-index: 100;

    ul {
        margin-top: 120px;
        padding-left: 40px;

        @media (min-width: 900px) {
            display: none;
            visibility: hidden;
        }

        li {
            list-style-type: none;
            padding: 15px 10px;

            a {
                /* display: none;
                visibility: hidden; */
                color: white;
                font-size: 13vw;
                text-decoration: none;
            }
        }
    }

`

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const cursorHandlers = useCursorHandlers();
    const { inView } = useContext(IntersectionContext);
    const controls = useAnimation();

    useEffect(() => {
        
    }, [controls]);

    const stagger = {
        closed: {
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
          },
        open: {
            transition: { staggerChildren: 0.2, delay: 1 }
        }
    };
    const variants_li = {
        open: pos => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: pos * 0.14,
                type: "spring",
                stiffness: 120,
            }
        }),
        closed: {
            y: 40,
            opacity: 0,
            transition: {
                duration: 0.2,
            }
        }
    };
    const variants_bg = {
        open: {
            width: "100%",
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        },
        closed: {
            opacity: 1,
            width: 0,
            transition: {
                delay: 0.5,
                duration: 0.45,
            }
        }
    };
      

    return(
        <NavbarStyled name="navbar">
            <IntersectionObserver>
                <Menu />
            </IntersectionObserver>
            <MenuButtonStyled onClick={() => setMenu(!menu)} className={menu ? 'open' : ''}>
                <svg width="70" height="70" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.1875 8.875L29.1875 34.9165" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="path_menu_1" />
                    <path d="M19.8125 13.042L19.8125 40.1252" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="path_menu_2" />
                </svg>
            </MenuButtonStyled>
            <MenuMobileStyled className={menu ? 'open' : ''}
            animate={menu ? "open" : "closed"}
            initial="closed"
            variants={variants_bg}>
                <motion.ul variants={stagger}>
                    <motion.li variants={variants_li} custom={2}><Link to="/" className="link hover-this" onClick={() => setMenu(false)}>Home</Link></motion.li>
                    <motion.li variants={variants_li} custom={3}><Link to="/works" className="link hover-this" onClick={() => setMenu(false)}>Works</Link></motion.li>
                    <motion.li variants={variants_li} custom={4}><Link to="/contact" className="link hover-this" onClick={() => setMenu(false)}>Contact</Link></motion.li>
                </motion.ul>
            </MenuMobileStyled>
        </NavbarStyled>
    )
}

export default Navbar;