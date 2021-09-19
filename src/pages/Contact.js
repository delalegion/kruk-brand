import ContactSection from "components/Contact/Contact";

import Header from "components/Contact/ContactHeader";

import Bottom from 'components/Bottom/Bottom';
import Footer from 'components/Bottom/Footer';
import Skills from 'components/Bottom/Skills';
import Container from 'components/Container';
import Works from "components/Contact/ContactWorks";

const Contact = () => {
    return(
        <>
            <Header />
            <Container>
                <ContactSection />
                <Works />
            </Container>
            <Bottom>
                <Container>
                    <Skills />
                    <Footer social />
                </Container>
            </Bottom>
        </>
    )
}

export default Contact;