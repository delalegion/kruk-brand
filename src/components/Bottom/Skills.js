import styled from "styled-components";

const SkillsStyled = styled.section`
    margin-top: 50px;
    color: white;
`
const Title = styled.h1`
    font-size: 6.250vw;
    font-family: ${props => props.theme.semiBold};

    @media (min-width: 1920px) {
        font-size: 120px;
    }
    @media (max-width: 768px) {
        font-size: 15vw;
        margin-top: 10px;
        margin-bottom: 30px;
    }
`
const SkillsItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > p {
        font-size: 1.563vw;
        margin-right: 30px;
        color: #b2b2b2;

        @media (min-width: 1920px) {
            font-size: 30px;
        }
        @media (max-width: 768px) {
            font-size: 3.146vw;
        }
        @media (max-width: 500px) {
            font-size: 4.546vw;  
            margin-bottom: 0px;
        }
    }
`

const Skills = () => {
    return(
        <>
            <SkillsStyled>
                <Title>Work areas</Title>
                <SkillsItems>
                    <p>Product design</p>
                    <p>Ui design</p>
                    <p>Web design</p>
                    <p>Graphic design</p>
                    <p>Branding</p>
                    <p>3D</p>
                    <p>Illustrations</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SASS</p>
                    <p>JS</p>
                    <p>Bootstrap/UIkit</p>
                    <p>NPM</p>
                    <p>Parcel</p>
                    <p>GIT</p>
                    <p>RWD/W3C/WCAG</p>
                    <p>Photoshop</p>
                    <p>Illustrator</p>
                    <p>Figma</p>
                    <p>XD</p>
                    <p>Blender</p>
                    <p>Substance Painter</p>
                    <p>Affinity Designer/Publisher</p>
                </SkillsItems>
            </SkillsStyled>
        </>
    )
}

export default Skills;