import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import WorkPage from './pages/Works';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import ProjectPage from './pages/Project';

import './App.scss';
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import theme from "./theme/theme.js";

import Container from './components/Container';
import Navbar from './components/Navbar/Navbar';
import CursorContextProvider from "providers/CursorContext";
import { AnimationContext } from "providers/AnimationContext";
import Cursor from "components/Cursor";

import { useEffect, useRef, useContext } from 'react';

import useWindowSize from "hooks/useWindowSize";
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber';


const LoadScreen = styled(motion.div)`
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
  pointer-events: none;

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
  pointer-events: none;

  & > img {
    position: absolute;
    width: 35vw;
    pointer-events: none;
  }
`
const LoadRed = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.primary};
  z-index: 899;
`
const CanvasStyled = styled(Canvas)`
  height: 100%;
  width: 100%;
`
const LogoStyled = styled(motion.div)`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 400px;
  justify-content: center;
  pointer-events: none;

  & > img {
    /* position: absolute; */
    position: relative;
  }
  & > svg:nth-child(2) {
    z-index: 5;
    position: relative;
    width: 15vw;
    pointer-events: none;
    
    @media (max-width: 768px) {
      width: 25vw;
    }
  }
  & > svg:nth-child(1) {
    z-index: 7;
    position: relative;
    width: 10vw;
    pointer-events: none;
    margin-right: 35px;

    @media (max-width: 768px) {
      width: 18vw;
    }
  }
`

const MyRotatingBox = () => {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh ref={myMesh}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="hotpink" transparent />
    </mesh>
  );
}

function App() {

  const [, setAnimation] = useContext(AnimationContext);
  const window = useWindowSize();

  const setAnimationState = () => {
    setAnimation(false);
  }

  const showLogoMotion = {
    hidden: {
      pathLength: 0,
      fill: "rgba(230, 30, 41, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(230, 30, 41, 1)"
    }
  }

  const logoMotion = {
    show: {
      x: 0,
      transition: {
        delay: 2,
        duration: 0.6,
        type: "spring", stiffness: 30
      }
    },
    hidden: {
      opacity: 0,
      visible: "hidden",
      transition: {
        duration: 0.6,
        delay: 1,
        type: "spring", stiffness: 30
      }
    }
  }
  const textMotion = {
    show: {
      opacity: 1,
      transition: {
        delay: 2.4,
        duration: 0.6,
        type: "spring", stiffness: 60
      }
    }
  }
  const backgroundRedMotion = {
    visible: {
      height: "100%",
    },
    hidden: {
      height: "0%",
      transition: {
        delay: 2.5,
        duration: 1,
      }
    }
  }
  const backgroundMotion = {
    visible: {
      height: "100%",
    },
    hidden: {
      height: "0%",
      transition: {
        delay: 2,
        duration: 1,
      }
    }
  }
  
  const imageControl = useAnimation();
  const bgControl = useAnimation();
  const logoControl = useAnimation();
  const location = useLocation();
  // logoControl.start("show");

  return (
    <>
        <CursorContextProvider>
          <Cursor />
          <ThemeProvider theme={theme}>
            <LoadScreen variants={backgroundMotion} initial="visible" animate={bgControl}>
              <LoadContainer>
                <LogoStyled animate={logoControl} variants={logoMotion}>
                  {/* <img src={LogoSygnet} alt="" ref={logo} /> */}
                  <motion.svg initial={{ x: 150 }} variants={logoMotion} animate="show" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="logoMotion"> 
                    <motion.path variants={showLogoMotion} initial="hidden" animate="visible" transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M30.2057 24.3346C31.6423 24.3346 32.8069 23.1614 32.8069 21.7142C32.8069 20.267 31.6423 19.0938 30.2057 19.0938C28.7691 19.0938 27.6045 20.267 27.6045 21.7142C27.6045 23.1614 28.7691 24.3346 30.2057 24.3346Z" fill="#E61E29"/>
                    <motion.path variants={showLogoMotion} initial="hidden" animate="visible" transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M68.4934 0V69C64.7195 69.0029 60.9815 68.2627 57.4894 66.8212C56.1554 66.2695 54.8656 65.6149 53.6315 64.8632C49.3358 62.276 45.7805 58.6095 43.3136 54.2225C40.8468 49.8355 39.5529 44.8785 39.5587 39.8366V17.1654L41.137 21.5818L49.5105 17.6659L50.0658 17.4156L58.9946 13.2494H34.0056C26.6324 13.2119 19.5177 15.9832 14.0874 21.0077C13.4882 21.5524 12.9183 22.1412 12.3776 22.7301L0 35.1993V0H68.4934Z" fill="#E61E29"/>
                  </motion.svg>
                  <motion.svg initial={{ opacity: 0 }} animate="show" variants={textMotion} onAnimationComplete={() => {
                      imageControl.start("hidden");
                      bgControl.start("hidden");
                      logoControl.start("hidden");
                  }} viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.887695 0.779297H4.74565V7.44817H11.5555V0.779297H15.4427V18.0183H11.5555V11.2022H4.74565V18.0183H0.887695V0.779297Z" fill="white"/>
                    <path d="M22.2666 11.4672V0.779297H26.1538V11.4377C26.1538 12.2615 26.4787 13.0516 27.0569 13.6342C27.6352 14.2167 28.4194 14.544 29.2372 14.544C30.055 14.544 30.8393 14.2167 31.4176 13.6342C31.9958 13.0516 32.3207 12.2615 32.3207 11.4377V0.779297H36.1932V11.4377C36.1111 13.2426 35.3417 14.9461 34.0448 16.1941C32.7479 17.4421 31.0234 18.1385 29.2299 18.1385C27.4364 18.1385 25.712 17.4421 24.4151 16.1941C23.1182 14.9461 22.3487 13.2426 22.2666 11.4377V11.4672Z" fill="white"/>
                    <path d="M43.0615 0.779297H49.7545C53.1302 0.779297 55.0592 2.75199 55.0592 5.35771C55.0729 6.06121 54.9017 6.75586 54.563 7.3712C54.2242 7.98654 53.7299 8.50067 53.1302 8.86144V9.08226C53.8847 9.42343 54.5228 9.98098 54.9646 10.6853C55.4064 11.3896 55.6325 12.2094 55.6145 13.0424C55.6139 13.7343 55.4726 14.4188 55.1992 15.0536C54.9258 15.6884 54.5262 16.26 54.025 16.7332C53.5238 17.2063 52.9317 17.571 52.2852 17.8047C51.6386 18.0384 50.9514 18.1361 50.266 18.0919H43.0615V0.779297ZM49.243 7.69844C49.5062 7.72174 49.7713 7.68817 50.0205 7.59998C50.2698 7.51179 50.4975 7.37101 50.6884 7.18706C50.8793 7.0031 51.029 6.7802 51.1275 6.53328C51.226 6.28635 51.2711 6.02107 51.2597 5.75519C51.257 5.50096 51.2016 5.25009 51.0971 5.01867C50.9926 4.78725 50.8413 4.58037 50.6528 4.41128C50.4643 4.2422 50.2429 4.11464 50.0026 4.03679C49.7624 3.95893 49.5086 3.93249 49.2576 3.95916H46.7441V7.69844H49.243ZM49.243 14.7353C49.5399 14.776 49.842 14.7491 50.1271 14.6565C50.4123 14.5639 50.6731 14.408 50.8905 14.2003C51.1079 13.9926 51.2762 13.7384 51.3831 13.4565C51.49 13.1746 51.5327 12.8721 51.5081 12.5713C51.5023 12.2799 51.4356 11.9929 51.3124 11.7292C51.1892 11.4655 51.0122 11.2309 50.793 11.0406C50.5738 10.8503 50.3173 10.7087 50.0402 10.625C49.7631 10.5412 49.4715 10.5172 49.1846 10.5544H46.7441V14.7795L49.243 14.7353Z" fill="white"/>
                    <path d="M61.7383 0.779297H72.5669V4.10637H65.5962V7.68371H71.5439V10.9961H65.5962V14.6617H72.903V18.0183H61.8113L61.7383 0.779297Z" fill="white"/>
                    <path d="M79.1277 0.778605H85.8207C86.5971 0.721867 87.3767 0.827195 88.1108 1.08799C88.8449 1.34879 89.5177 1.75945 90.087 2.29425C90.6562 2.82905 91.1098 3.47648 91.4193 4.19602C91.7287 4.91555 91.8874 5.69169 91.8853 6.47585C91.8942 7.51319 91.6159 8.53248 91.0815 9.41925C90.5472 10.306 89.778 11.0252 88.8603 11.4959L92.5137 18.0176H88.1297L85.207 12.2614H82.9126V18.0176H79.0547L79.1277 0.778605ZM85.4846 8.93436C85.8113 8.95851 86.1392 8.91147 86.4462 8.79646C86.7531 8.68145 87.0319 8.50116 87.2635 8.26787C87.4951 8.03457 87.674 7.75375 87.7882 7.44452C87.9024 7.13528 87.9491 6.8049 87.9251 6.47585C87.9368 6.14998 87.8795 5.82533 87.7569 5.52351C87.6344 5.22169 87.4495 4.94961 87.2145 4.72539C86.9794 4.50116 86.6997 4.32993 86.3939 4.22307C86.0881 4.11622 85.7632 4.0762 85.4408 4.10568H82.9857V8.93436H85.4846Z" fill="white"/>
                    <path d="M102.334 4.15054H97.5703V0.779297H111V4.15054H106.221V18.0183H102.334V4.15054Z" fill="white"/>
                    <path d="M10.4303 41.8972L6.45543 34.5364L4.74565 36.5827V41.853H0.887695V24.6582H4.74565V31.2387H4.83333L9.99189 24.6582H14.7559L9.05662 31.4301L14.902 41.8972H10.4303Z" fill="white"/>
                    <path d="M20.7324 24.6575H27.4254C28.2018 24.6008 28.9814 24.7061 29.7155 24.9669C30.4496 25.2277 31.1223 25.6384 31.6916 26.1732C32.2609 26.708 32.7145 27.3554 33.0239 28.0749C33.3334 28.7945 33.492 29.5706 33.49 30.3548C33.4989 31.3921 33.2205 32.4114 32.6862 33.2981C32.1518 34.1849 31.3826 34.9041 30.465 35.3748L34.0599 41.8965H29.6759L26.7532 36.1403H24.5904V41.8965H20.7324V24.6575ZM27.0893 32.8133C27.7249 32.8133 28.3345 32.5589 28.784 32.1061C29.2334 31.6533 29.4859 31.0392 29.4859 30.3989C29.4859 29.7586 29.2334 29.1445 28.784 28.6917C28.3345 28.239 27.7249 27.9846 27.0893 27.9846H24.5904V32.8133H27.0893Z" fill="white"/>
                    <path d="M40.0225 35.3461V24.6582H43.9096V35.3166C43.9096 36.1405 44.2345 36.9305 44.8128 37.5131C45.391 38.0956 46.1753 38.4229 46.9931 38.4229C47.8109 38.4229 48.5952 38.0956 49.1734 37.5131C49.7517 36.9305 50.0765 36.1405 50.0765 35.3166V24.6582H53.9491V35.3166C53.867 37.1215 53.0975 38.825 51.8006 40.073C50.5038 41.321 48.7793 42.0174 46.9858 42.0174C45.1923 42.0174 43.4678 41.321 42.1709 40.073C40.874 38.825 40.1046 37.1215 40.0225 35.3166V35.3461Z" fill="white"/>
                    <path d="M70.3601 41.8972L66.3853 34.5364L64.7486 36.6268V41.8972H60.8906V24.6582H64.7486V31.2387H64.8947L70.0533 24.6582H74.8173L69.118 31.4301L74.9634 41.8972H70.3601Z" fill="white"/>
                  </motion.svg>
                  {/* <img src={LogoText} alt="" ref={logoText} /> */}
                </LogoStyled>
              </LoadContainer>
            </LoadScreen>
            <LoadRed variants={backgroundRedMotion} initial="visible" animate={imageControl} onAnimationComplete={() => {
                setAnimationState();
            }}/>
            <Container> 
              <Navbar />
            </Container>
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                      <Route exact path="/" component={HomePage} />
                      <Route exact path="/works" component={WorkPage} />
                      <Route path="/works/:project" component={ProjectPage} />
                      <Route path="/contact" component={ContactPage} />
                  </Switch>
                </AnimatePresence>
          </ThemeProvider>
        </CursorContextProvider>
    </>
  );
}

export default App;