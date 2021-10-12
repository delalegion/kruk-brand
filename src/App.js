import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import WorkPage from './pages/Works';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';

import './App.scss';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme/theme.js';

import Container from './components/Container';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from "components/ScrollToTop";
import CursorContextProvider from "providers/CursorContext";
import { AnimationContext } from "providers/AnimationContext";
import Cursor from "components/Cursor";

import { useEffect, useRef, useContext } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap/all';

import LogoSygnet from 'assets/logoSygnet.svg';
import LogoText from 'assets/logoText.svg';
import useWindowSize from "hooks/useWindowSize";

const LoadScreen = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 900;
  flex-direction: column;
`
const LoadWord = styled.p`
  font-size: 10vw;
  color: white;
  position: absolute;
  margin: 0;

  @media (min-width: 1920px) {
    font-size: 180px;
  }
`
const LoadContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;

  & > img {
    position: absolute;
    width: 35vw;
  }
`
const LoadRed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.primary};
  z-index: 899;
`
const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 400px;
  justify-content: center;
  opacity: 0;

  & > img {
    /* position: absolute; */
    position: relative;
  }
  & > img:nth-child(2) {
    z-index: 5;
    position: relative;
    width: 15vw;
    
    @media (max-width: 768px) {
      width: 25vw;
    }
  }
  & > img:nth-child(1) {
    z-index: 7;
    position: relative;
    width: 10vw;

    @media (max-width: 768px) {
      width: 18vw;
    }
  }
`

function App() {

  const [, setAnimation] = useContext(AnimationContext);
  const window = useWindowSize();

  const screen = useRef(null);
  const screenRed = useRef(null);

  const logoContainer = useRef(null);
  const logo = useRef(null);
  const logoText = useRef(null);

  const word = useRef(null);
  const secondWord = useRef(null);

  const tl = gsap.timeline({ defaults: {duration: 0.5, ease: "power4.out"} });

  const setAnimationState = () => {
    setAnimation(false);
  }

  const isMobile = (window.width > 1640) ? "-50px" : "-4vw";

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({
      nullTargetWarn: false
    }) 
  }

  useEffect(() => {

      tl.set(screen.current, { height: "100%" });
      tl.set(screenRed.current, { height: "100%" });
      tl.set(word.current, { y: 100, opacity: 0 });
      tl.set(secondWord.current, { y: 100, opacity: 0 });
      tl.set(logoContainer.current, { y: 100, opacity: 0 });
      tl.set(logo.current, { left: 60 });
      tl.set(logoText.current, { right: 0, opacity: 0 });

      tl.to(word.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      }).to(word.current, {
        opacity: 0,
        y: -100,
        duration: 0.7,
        pointerEvents: "none",
      }).to(secondWord.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      }).to(secondWord.current, {
        opacity: 0,
        y: -100,
        duration: 0.7,
        pointerEvents: "none",
      }).to(logoContainer.current, {
        opacity: 1,
        y: 0,
        duration: 0.7
      }).to(logo.current, {
        left: 0,
        duration: 1,
        delay: -0.5,
      }).to(logoText.current, {
        right: isMobile,
        duration: 0.7,
        opacity: 1,
        delay: -0.8
      }).to(logoContainer.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        delay: 0.5,
        pointerEvents: "none",
      }).to(screen.current, {
        height: "0%",
        duration: 1,
        delay: -0.4,
      }).to(screenRed.current, {
        height: "0%",
        duration: 1,
        delay: -0.6,
        onStart: setAnimationState,
      });
  }, [])

  return (
    <>
      <Router>
        <CursorContextProvider>
          <Cursor />
          <ThemeProvider theme={theme}>
            <LoadScreen ref={screen}>
              <LoadContainer>
                <LoadWord ref={word}>Creativity.</LoadWord>
                <LoadWord ref={secondWord}>Modernity.</LoadWord>
                <LogoStyled ref={logoContainer}>
                  <img src={LogoSygnet} alt="" ref={logo} />
                  <img src={LogoText} alt="" ref={logoText} />
                </LogoStyled>
              </LoadContainer>
            </LoadScreen>
            <LoadRed ref={screenRed} />
              <Container> 
                <Navbar />
              </Container>
              <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/works" component={WorkPage} />
                    <Route path="/contact" component={ContactPage} />
                </Switch>
              </ScrollToTop>
          </ThemeProvider>
        </CursorContextProvider>
      </Router>
    </>
  );
}

export default App;
