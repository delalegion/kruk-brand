import Offer from '../components/Offer/Offer';
import Works from '../components/Works/Works';
import Bottom from '../components/Bottom/Bottom';
import Footer from '../components/Bottom/Footer';
import Skills from '../components/Bottom/Skills';
import Header from '../components/Header/Header';
import Container from '../components/Container';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
    return(
        <>
            <Container>
                <Header />
                <Offer />
                <Works />
            </Container>
            <Bottom>
                <Container>
                    <Skills />
                    <Footer />
                </Container>
            </Bottom>
        </>
    )
}

export default Home;