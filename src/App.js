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

import Offer from './components/Offer/Offer';
import Works from './components/Works/Works';
import Bottom from './components/Bottom/Bottom';
import Footer from './components/Bottom/Footer';
import Skills from './components/Bottom/Skills';
import Header from './components/Header/Header';
import Container from './components/Container';
import Navbar from './components/Navbar/Navbar';

function App() {
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
