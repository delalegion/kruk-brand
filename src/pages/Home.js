import Offer from '../components/Home/Offer';
import Works from '../components/Home/Works';
import Bottom from '../components/Bottom/Bottom';
import Footer from '../components/Bottom/Footer';
import Skills from '../components/Bottom/Skills';
import Header from '../components/Home/Header';
import Container from '../components/Container';

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