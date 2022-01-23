import Offer from 'components/Home/Offer/HomeOffer';
import Works from 'components/Home/Works/HomeWorks';
import Bottom from 'components/Bottom/Bottom';
import Footer from 'components/Bottom/Footer';
import Skills from 'components/Bottom/Skills/Skills';
import Header from 'components/Home/Header/HomeHeader';
import Container from 'components/Container';
import PageTransition from 'transitions/PageTransition';
import ScrollToTop from 'components/ScrollToTop';

const Home = () => {
    return(
        <>
        <ScrollToTop>
            <PageTransition>
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
            </PageTransition>
        </ScrollToTop>
        </>
    )
}

export default Home;