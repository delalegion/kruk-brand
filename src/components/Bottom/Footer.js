import styled from "styled-components";

import useCursorHandlers from "hooks/useCursorHandlers";
import PropTypes from 'prop-types';
import { useRef, useEffect } from "react";
import gsap from 'gsap';

const FooterStyled = styled.footer`
    margin-top: 200px;
    color: white;
    z-index: 19;
    position: relative;

    @media (max-width: 768px) {
        margin-top: 50px;
    }
`
const Title = styled.h2`
    font-size: 3.125vw;
    font-family: ${props => props.theme.semiBold};
    opacity: 0;
    transform: translate(0px, -60px);

    @media (min-width: 1650px) {
        font-size: 60px;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
        margin-top: 10px;
        margin-bottom: 30px;
    }
`
const SocialTitle = styled.h3`
    font-size: 2.604vw;
    font-family: ${props => props.theme.semiBold};
    margin-bottom: 15px;
    opacity: 0;
    transform: translate(0px, -60px);

    @media (min-width: 1920px) {
        font-size: 50px;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
        margin-top: 10px;
        margin-bottom: 15px;
    }
`
const SocialItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (min-width: 1024px) {
        & > p {
            overflow: hidden;
            margin: 1.5vw 0;
        }
    }
    @media (max-width: 1024px) {
        & > p {
            margin: 0;
            margin-bottom: 2vw;
        }
    }

    & > p {
        transform: translate(0px, -40px);
        opacity: 0;
    }
    & > p > a {
        font-size: 1.563vw;
        margin-right: 50px;
        color: #b2b2b2;

        @media (min-width: 1920px) {
            font-size: 30px;
        }
        @media (max-width: 768px) {
            font-size: 4vw;
        }

        &:hover {
            color: white;
        }
    }
`
const CopyStyled = styled.p`
    padding: 70px 0 0px 0;
    color: ${props => props.theme.primary};
    font-size: 1.094vw;
    opacity: 0;
    transform: translate(0px, -60px);

    @media (min-width: 1920px) {
        font-size: 21px;
    }
    @media (max-width: 768px) {
        font-size: 4vw;
    }
`
const EmailTitle = styled.h4`
    font-size: 1.563vw;
    color: white;
    font-family: ${props => props.theme.semiBold};
    opacity: 0;
    transform: translate(0px, -60px);

    @media (min-width: 1920px) {
        font-size: 30px;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
    }
`
const Email = styled.a`
    font-size: 1.563vw;
    color: #b2b2b2;
    text-decoration: none;
    opacity: 0;
    transform: translate(0px, -60px);

    @media (min-width: 1920px) {
        font-size: 30px;
    }
    @media (max-width: 768px) {
        font-size: 4vw;
    }
`

const Footer = ({ social }) => {

    const cursorHandlers = useCursorHandlers();

    const title = useRef(null);

    const revealRefs = useRef([]);
    revealRefs.current = [];

    const emailTitle = useRef(null);
    const email = useRef(null);
 
    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        // gsap.set(title.current, { y: -60, opacity: 0 });
        gsap.to(title.current, {
            duration: 0.7,
            y: 0,
            opacity: 1,
            ease: "power2",
            scrollTrigger: {
                trigger: title.current,
                start: 'top center+=200',
                toggleActions: 'play none play none'
            }
        });
        gsap.to(emailTitle.current, {
            duration: 0.7,
            y: 0,
            opacity: 1,
            ease: "power2",
            scrollTrigger: {
                trigger: title.current,
                start: 'top center+=200',
            }
        });
        gsap.to(email.current, {
            duration: 0.7,
            y: 0,
            opacity: 1,
            ease: "power2",
            scrollTrigger: {
                trigger: title.current,
                start: 'bottom center+=200',
            }
        });
        revealRefs.current.forEach((el, index) => {
            gsap.to(el, {
                duration: 1,
                ease: 'power2',
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top bottom-=150',
                }
            });
        });
    }, []);

    return(
        <>
            <FooterStyled>
                {!social ? (
                    <div className="row">
                        <div className="col_12 col_m_8">
                            <Title ref={title}>Any questions?<br/> Feel free to ask! 🤩</Title>
                        </div>
                        <div className="col_12 col_m_4">
                            <SocialTitle ref={addToRefs}>Social media</SocialTitle>
                            <SocialItems>
                                <p ref={addToRefs}><a className="hover-this" href="https://www.dribbble.com/hubkruczek" {...cursorHandlers}><span>Dribbble</span></a></p>
                                <p ref={addToRefs}><a className="hover-this" href="https://www.behance.com/hubkruczek" {...cursorHandlers}><span>Behance</span></a></p>
                                <p ref={addToRefs}><a className="hover-this" href="https://www.linkedin.com/in/hubert-kruk/" {...cursorHandlers}><span>Linkedin</span></a></p>
                                <p ref={addToRefs}><a className="hover-this" href="https://www.github.com/delalegion" {...cursorHandlers}><span>Github</span></a></p>
                                <p ref={addToRefs}><a className="hover-this" href="https://www.m.me/krukhubert" {...cursorHandlers}><span>Messenger</span></a></p>
                            </SocialItems>
                            <EmailTitle ref={addToRefs}>Email</EmailTitle>
                            <Email ref={addToRefs} href="mailto:hkrukcontact@gmail.com" {...cursorHandlers}>hkrukcontact@gmail.com</Email>
                        </div>
                    </div>
                ) : ''}
                <CopyStyled ref={addToRefs}>
                    Hubert Kruk @ 2021
                </CopyStyled>
            </FooterStyled>
        </>
    )
}

export default Footer;

Footer.propTypes = {
    social: PropTypes.bool
};