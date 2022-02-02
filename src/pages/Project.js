import Bottom from 'components/Bottom/Bottom';
import Footer from 'components/Bottom/Footer';
import Container from 'components/Container';
import PageTransition from 'transitions/PageTransition';
import ScrollToTop from 'components/ScrollToTop';
import Header from 'components/Project/Header/ProjectHeader';
import { useParams } from 'react-router-dom';
import Projects from 'components/Project/Project';
import { list } from "components/Data";
import Works from 'components/Project/MoreProjects';

const Project = () => {

    const { project } = useParams();

    const data = list.find(item => item.url === project);

    return(
        <>
        <ScrollToTop>
            <PageTransition>
                <Header data={data} />
                <Projects data={data} />
                <Container>
                    <Works />
                </Container>
                <Bottom>
                    <Container>
                        <Footer />
                    </Container>
                </Bottom>
            </PageTransition>
        </ScrollToTop>
        </>
    )
}

export default Project;