import { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import Logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

import useCursorHandlers from "hooks/useCursorHandlers";
import useOnScreen from 'hooks/useOnScreen';
import gsap from 'gsap/all';

const NavbarStyled = styled.nav`
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding-top: 20px;
    }
`
const MenuStyled = styled.ul`
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
const LogoStyled = styled.img`
    width: 45.781vw;

    @media (min-width: 768px) {
        width: 207px;
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
const MenuMobileStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #E61E29;
    z-index: 100;
    display: none;
    visibility: hidden;
    flex-direction: column;
    z-index: 100;

    ul {
        margin-top: 120px;
        padding-left: 20px;

        li {
            list-style-type: none;
            padding: 15px 10px;

            a {
                display: none;
                visibility: hidden;
                color: white;
                font-size: 13vw;
                text-decoration: none;
            }
        }
    }

    &.open {
        display: flex;
        visibility: visible;

        a {
            display: flex;
            visibility: visible;
        }
    }
`

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [tl, setTimeline] = useState();

    const logo = useRef(null);
    const navbar = useRef(null);
    const menuRef = useRef(null);

    const cursorHandlers = useCursorHandlers();
    const onScreen = useOnScreen(navbar);

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: {ease: "power4.out"} });
        setTimeline(timeline);
        timeline.set(logo.current, { y: -60, opacity: 0 });

        timeline.set(menuRef.current.children[0], { y: -60, opacity: 0 });
        timeline.set(menuRef.current.children[1], { y: -60, opacity: 0 });
        timeline.set(menuRef.current.children[2], { y: -60, opacity: 0 });
    }, [])

    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
        if (reveal) {
            tl.to(logo.current, {
                duration: 1,
                y: 0,
                opacity: 1,
                delay: 1,
                ease: "power2"
            }).to([menuRef.current.children[0], menuRef.current.children[1], menuRef.current.children[2]], {
                duration: 1,
                y: 0,
                opacity: 1,
                delay: -1,
                stagger: 0.1,
                ease: "power2"
            });
        }
    }, [tl, reveal])

    return(
        <NavbarStyled name="navbar" ref={navbar}>
            <Link to="/" className="link hover-this" {...cursorHandlers}><LogoStyled src={Logo} ref={logo} alt="My personal logo which present head of raven on red background and title Hubert Kruk" /></Link>
            <MenuStyled ref={menuRef}>
                <li><Link to="/" className="link hover-this" {...cursorHandlers}>Home</Link></li>
                <li><Link to="/works" className="link hover-this" {...cursorHandlers}>Works</Link></li>
                <li><Link to="/contact" className="link hover-this" {...cursorHandlers}>Contact</Link></li>
            </MenuStyled>
            <MenuButtonStyled onClick={() => setMenu(!menu)} className={menu ? 'open' : ''}>
                <svg width="70" height="70" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.1875 8.875L29.1875 34.9165" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="path_menu_1" />
                    <path d="M19.8125 13.042L19.8125 40.1252" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="path_menu_2" />
                </svg>
            </MenuButtonStyled>
            <MenuMobileStyled className={menu ? 'open' : ''}>
                <ul>
                    <li><Link to="/" className="link hover-this" onClick={() => setMenu(false)}>Home</Link></li>
                    <li><Link to="/works" className="link hover-this" onClick={() => setMenu(false)}>Works</Link></li>
                    <li><Link to="/contact" className="link hover-this" onClick={() => setMenu(false)}>Contact</Link></li>
                </ul>
            </MenuMobileStyled>
        </NavbarStyled>
    )
}

export default Navbar;