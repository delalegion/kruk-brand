import styled from "styled-components";
import Project1 from "assets/projects/1.png";
import Project2 from "assets/projects/2.png";
import Project3 from "assets/projects/3.png";
import Project4 from "assets/projects/4.png";

import { IntersectionObserver } from "hooks/useIntersection";
import Title from "components/Title";
import useCursorHandlers from "hooks/useCursorHandlers";
import CodingItem from "./CodingItem";
import Github from "./Github";
import Container from "components/Container";

const CodingStyled = styled.section`
    margin-top: 100px;
    padding: 50px 0;

    @media (max-width: 768px) {
        padding: 0;
        margin-top: 50px;
    }
`

const Coding = () => {

    const cursorHandlers = useCursorHandlers();

    let works_Array = [
        {
            "title": "Personal website code",
            "image_hover": Project1,
            "code_link": "I'm doing modern websites",
            "live_link": "Konfederacja Kobiet RP"
        },
        {
            "title": "Logistics company website",
            "image_hover": Project2,
            "code_link": "I'm doing modern websites",
            "live_link": "Konfederacja Kobiet RP"
        },
        {
            "title": "Marketing company website",
            "image_hover": Project3,
            "code_link": "I'm doing modern websites",
            "live_link": "Konfederacja Kobiet RP"
        },
        {
            "title": "Old real estate company website",
            "image_hover": Project4,
            "code_link": "I'm doing modern websites",
            "live_link": "Konfederacja Kobiet RP"
        },
    ]

    return(
    <CodingStyled>
        <Container>
            <IntersectionObserver>
                <Title>Coding</Title>
            </IntersectionObserver>
            <div className="row">
                <div className="col_h_8 col_h_4_offset">
                    <IntersectionObserver>
                        <Github />
                    </IntersectionObserver>
                    {works_Array.map((item, key) => (
                        <>
                            <IntersectionObserver key={key}>
                                <CodingItem {...cursorHandlers} data={item} pos={key} />
                            </IntersectionObserver>
                        </>
                    ))}
                </div>
            </div>
        </Container>
    </CodingStyled>
    )
}

export default Coding;