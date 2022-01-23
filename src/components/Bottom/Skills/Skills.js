import styled from "styled-components";
import Title from "components/Title";
import { IntersectionObserver } from "hooks/useIntersection";
import SkillsItems from "./SkillsItems";

const SkillsStyled = styled.section`
    color: white;
    padding: 50px 0;
    margin: 100px 0;
`
const TitleStyled = styled(Title)`
    font-size: 6.250vw;
    font-family: ${props => props.theme.semiBold};
    transform: translate(0px, -70px);
    opacity: 0;
    margin-top: 0;

    @media (min-width: 1920px) {
        font-size: 120px;
    }
    @media (max-width: 768px) {
        font-size: 13vw;
        margin-top: 0px;
    }
`

const Skills = () => {

    return(
        <>
            <SkillsStyled>
                <IntersectionObserver>
                    <TitleStyled>Works area</TitleStyled>
                </IntersectionObserver>
                <IntersectionObserver>
                    <SkillsItems />
                </IntersectionObserver>
            </SkillsStyled>
        </>
    )
}

export default Skills;