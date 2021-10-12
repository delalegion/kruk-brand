import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from 'gsap';

const SkillsStyled = styled.section`
    color: white;
`
const Title = styled.h1`
    font-size: 6.250vw;
    font-family: ${props => props.theme.semiBold};
    transform: translate(0px, -70px);
    opacity: 0;
    margin-top: 0px;

    @media (min-width: 1920px) {
        font-size: 120px;
    }
    @media (max-width: 768px) {
        font-size: 13vw;
        margin-top: 0px;
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
        opacity: 0;
        transform: translate(0px, -20px);

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

    const title = useRef(null);
    const skills = useRef(null);

    const revealRefs = useRef([]);
    revealRefs.current = [];

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        gsap.to(title.current, {
            duration: 0.7,
            y: 0,
            opacity: 1,
            ease: "power2",
            scrollTrigger: {
                trigger: title.current,
                start: 'top center+=50',
                toggleActions: 'play none play none'
            }
        });
        gsap.to(revealRefs.current, {
            duration: 0.5,
            y: 0,
            opacity: 1,
            ease: "power2",
            stagger: 0.05,
            scrollTrigger: {
                trigger: revealRefs.current[0],
                start: 'top center+=200',
                toggleActions: 'play none play none'
            }
        });
    });

    return(
        <>
            <SkillsStyled>
                <Title ref={title}>Works area</Title>
                <SkillsItems>
                    <p ref={addToRefs}>Product design</p>
                    <p ref={addToRefs}>Ui design</p>
                    <p ref={addToRefs}>Web design</p>
                    <p ref={addToRefs}>Graphic design</p>
                    <p ref={addToRefs}>Branding</p>
                    <p ref={addToRefs}>3D</p>
                    <p ref={addToRefs}>Illustracje</p>
                    <p ref={addToRefs}>HTML</p>
                    <p ref={addToRefs}>CSS</p>
                    <p ref={addToRefs}>SASS</p>
                    <p ref={addToRefs}>JS</p>
                    <p ref={addToRefs}>Bootstrap/UIkit</p>
                    <p ref={addToRefs}>NPM</p>
                    <p ref={addToRefs}>Parcel</p>
                    <p ref={addToRefs}>GIT</p>
                    <p ref={addToRefs}>RWD/W3C/WCAG</p>
                    <p ref={addToRefs}>Photoshop</p>
                    <p ref={addToRefs}>Illustrator</p>
                    <p ref={addToRefs}>Figma</p>
                    <p ref={addToRefs}>XD</p>
                    <p ref={addToRefs}>Blender</p>
                    <p ref={addToRefs}>Substance Painter</p>
                    <p ref={addToRefs}>Affinity Designer/Publisher</p>
                </SkillsItems>
            </SkillsStyled>
        </>
    )
}

export default Skills;