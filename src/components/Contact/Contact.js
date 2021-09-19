import styled from "styled-components";
import { useRef } from "react";

import Project1 from "../../assets/projects/1.png";
import Project2 from "../../assets/projects/2.png";
import Project3 from "../../assets/projects/3.png";
import Project4 from "../../assets/projects/4.png";

import { gsap } from 'gsap';

const CodingItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;
    position: relative;
    border-bottom: 2px solid #202020;
    color: ${props => props.theme.grey};
    transition: ${props => props.theme.animation};

    &:hover {
        padding-bottom: 38px;
        border-bottom: 4px solid ${props => props.theme.primary};
    }
    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 4.250vw;
        padding-top: 7.208vw - 4px;
        padding-bottom: 7.208vw 4px;
    }
    @media (max-width: 1024px) {
        flex-direction: column;
        font-size: 4.250vw;
    }
`
const CodingButton = styled.a`
    display: flex;
    flex-direction: row;
    font-size: 25px;
    align-items: center;
    letter-spacing: 1.5px;
    transition: ${props => props.theme.animation};
    color: ${props => props.theme.grey};
    text-decoration: none;

    &:hover {
        color: white;
        cursor: pointer;
        & > svg {
            & > path { transition: ${props => props.theme.animation}; }
            & > path:nth-child(1) {
                fill: white;
            }
            & > path:nth-child(2) {
                stroke: white;
            }
        }
    }
    & > svg {
        transition: ${props => props.theme.animation};
        margin-left: 10px;
        & > path { transition: ${props => props.theme.animation}; }
    }
    &:nth-child(2) {
        margin-left: 40px;
    }
    @media (max-width: 768px) {
        font-size: 3.255vw;
        & > svg {
            width: 4.818vw;
            height: 4.818vw;
        }
    }
`
const CodingButtons = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
        margin-top: 2.930vw;
    }
`
const CodingHover = styled.div`
    position: absolute;
    left: -380px;
    top: -40px;
    opacity: 0;
    transform: translate(0px, 60px);
    pointer-events: none;

    & > img {
        width: 320px;
        height: 250px;
        -o-object-fit: cover;
        object-fit: cover;
    }
`

const Contact = () => {

    const coding_1 = useRef();
    const coding_2 = useRef();
    const coding_3 = useRef();
    const coding_4 = useRef();

    const tl = gsap.timeline();

    const mousemove = (event, el) => {
        tl.set(el.current, { y: 60, opacity: 0, rotation: 0 });
        gsap.to(el.current, {
            opacity: 1, 
            y: 0, 
            duration: 0.5,
            rotation: 5,
            ease: "power4.out"
        });
    }
    const mouseleave = (event, el) => {
        gsap.to(el.current, {
            opacity: 0, 
            y: 60, 
            duration: 0.5,
            rotation: 0,
            ease: "power4.out"
        });
    }

    return(
        <>
            <div className="row">
                <div className="col_h_8 col_h_4_offset">
                    <CodingItem onMouseOver={e => mousemove(e, coding_1)} onMouseLeave={e => mouseleave(e, coding_1)} name="contact">
                        <CodingHover ref={coding_1}><img src={Project1} alt="" /></CodingHover>
                        Messenger
                        <CodingButtons>
                            <CodingButton href="#">WRITE TO ME <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></CodingButton>
                        </CodingButtons>
                    </CodingItem>
                    <CodingItem onMouseOver={e => mousemove(e, coding_2)} onMouseLeave={e => mouseleave(e, coding_2)}>
                        <CodingHover ref={coding_2}><img src={Project2} alt="" /></CodingHover>
                        Email
                        <CodingButtons>
                            <CodingButton href="#">HKRUKCONTACT@GMAIL.COM <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></CodingButton>
                        </CodingButtons>
                    </CodingItem>
                    <CodingItem onMouseOver={e => mousemove(e, coding_3)} onMouseLeave={e => mouseleave(e, coding_3)}>
                        <CodingHover ref={coding_3}><img src={Project3} alt="" /></CodingHover>
                        Linkedin
                        <CodingButtons>
                            <CodingButton href="#">WRITE TO ME <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></CodingButton>
                        </CodingButtons>
                    </CodingItem>
                    <CodingItem onMouseOver={e => mousemove(e, coding_4)} onMouseLeave={e => mouseleave(e, coding_4)}>
                        <CodingHover ref={coding_4}><img src={Project4} alt="" /></CodingHover>
                        Dribbble
                        <CodingButtons>
                            <CodingButton href="#">WATCH MY WORKS <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></CodingButton>
                        </CodingButtons>
                    </CodingItem>
                    <CodingItem onMouseOver={e => mousemove(e, coding_4)} onMouseLeave={e => mouseleave(e, coding_4)}>
                        <CodingHover ref={coding_4}><img src={Project4} alt="" /></CodingHover>
                        Behance
                        <CodingButtons>
                            <CodingButton href="#">WATCH MY WORKS <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></CodingButton>
                        </CodingButtons>
                    </CodingItem>
                    <CodingItem onMouseOver={e => mousemove(e, coding_4)} onMouseLeave={e => mouseleave(e, coding_4)}>
                        <CodingHover ref={coding_4}><img src={Project4} alt="" /></CodingHover>
                        Github
                        <CodingButtons>
                            <CodingButton href="#">LOOK AT MY CODE <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></CodingButton>
                        </CodingButtons>
                    </CodingItem>
                </div>
            </div>
        </>
    )
}

export default Contact;