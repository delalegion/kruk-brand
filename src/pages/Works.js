import Bottom from 'components/Bottom/Bottom';
import Footer from 'components/Bottom/Footer';
import Skills from 'components/Bottom/Skills';
import Container from 'components/Container';

import Header from "../components/Works/WorksHeader";
import WorksSection from "../components/Works/Works";

const Works = () => {

    window.onbeforeunload = function () {
        console.log("works")
        window.scrollTo(0, 0);
    }

    return(
        <>
            <Header />
            <WorksSection />
            <Bottom>
                <Container>
                    <Skills />
                    <Footer />
                </Container>
            </Bottom>
        </>
    )
}

export default Works;