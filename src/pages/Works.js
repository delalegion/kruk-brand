import Bottom from 'components/Bottom/Bottom';
import Footer from 'components/Bottom/Footer';
import Skills from 'components/Bottom/Skills/Skills';
import Container from 'components/Container';
import ScrollToTop from 'components/ScrollToTop';
import PageTransition from 'transitions/PageTransition';

import Header from "../components/Works/Header/WorksHeader";
import WorksSection from "../components/Works/Works";

const Works = () => {
    return(
        <>
        <ScrollToTop>
            <PageTransition>
                <Header />
                <WorksSection />
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

export default Works;