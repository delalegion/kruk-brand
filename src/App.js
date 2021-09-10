import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import WorkPage from './pages/Works';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';

import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme.js';

import Container from './components/Container';
import Navbar from './components/Navbar/Navbar';

function App() {
   
  // useEffect(() => {
  //   const links = document.querySelectorAll(".hover-this");

  //   const animateIt = function (e) {
  //       const a = this.querySelector("span");
  //       const { offsetX: x, offsetY: y } = e,
  //       { offsetWidth: width, offsetHeight: height } = this,

  //       move = 20,
  //       xMove = x / width * (move * 2) - move,
  //       yMove = y / height * (move * 2) - move;

  //       a.style.transform = `translate(${xMove}px, ${yMove}px)`;

  //       if (e.type === "mouseleave") a.style.transform = `translate(0px, 0px)`;
  //   }

  //   links.forEach(b => b.addEventListener('mousemove', animateIt));
  //   links.forEach(b => b.addEventListener('mouseleave', animateIt));
  // }, [])

  return (
    <>
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
        </Container>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/works" component={WorkPage} />
            <Route path="/contact" component={ContactPage} />
        </Switch>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;
