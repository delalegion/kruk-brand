import { useState } from 'react'
import styled from "styled-components";
import Logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

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

    @media (max-width: 900px) {
        display: none;
        visibility: none;
    }

    & > li {
        list-style-type: none;
        padding: 15px;
        font-size: 1.094vw;
        color: #000;
        display: flex;
        align-items: center;

        a {
            color: black;
            text-decoration: none;
        }

        @media (min-width: 1920px) {
            font-size: 21px;
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
    display: flex;
    flex-direction: column;
    z-index: 100;

    ul {
        margin-top: 120px;
        padding-left: 20px;

        li {
            list-style-type: none;
            color: white;
            font-size: 13vw;
            padding: 15px 10px;
        }
    }

    &.open {
        display: flex;
        visibility: visible;
    }
`
const MenuClose = styled.section`
    display: flex;
    width: 100%;
    justify-content: flex-end;

    svg {
        margin-right: 35px;
        margin-top: 30px;
    }
`

const Navbar = (props) => {

    const [menu, setMenu] = useState(false);

    return(
        <NavbarStyled>
            <LogoStyled src={Logo} alt="My personal logo which present head of raven on red background and title Hubert Kruk" />
            <MenuStyled>
                <li><Link to="/" className="link">Works</Link></li>
                <li><Link to="/works" className="link">Services</Link></li>
                <li><Link to="/contact" className="link">Contact</Link></li>
            </MenuStyled>
            <MenuButtonStyled onClick={() => setMenu(!menu)} className={menu ? 'open' : ''}>
                <svg width="70" height="70" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="49" height="49" fill="white"/>
                    <path d="M29.1875 8.875L29.1875 34.9165" stroke="black" stroke-width="1.5" stroke-linecap="round" className="path_menu_1" />
                    <path d="M19.8125 13.042L19.8125 40.1252" stroke="black" stroke-width="1.5" stroke-linecap="round" className="path_menu_2" />
                </svg>
            </MenuButtonStyled>
            <MenuMobileStyled className={menu ? 'open' : ''}>
                <ul>
                    <li>Works</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </MenuMobileStyled>
        </NavbarStyled>
    )
}

export default Navbar;