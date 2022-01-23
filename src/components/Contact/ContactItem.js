import { motion, useAnimation } from "framer-motion";
import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";
import { IntersectionContext } from "hooks/useIntersection";
import useWindowSize from "hooks/useWindowSize";
import useCursorHandlers from "hooks/useCursorHandlers";

const ContactItemStyled = styled(motion.div)`
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
    @media (max-width: 1339px) {
        font-size: 2.650vw;
        align-items: center;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 4.250vw;
        align-items: unset;
    }
`
const ContactButton = styled.a`
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
    @media (max-width: 1339px) {
        font-size: 2.050vw;
    }
    @media (max-width: 1024px) {
        & > svg {
            width: 3.518vw;
            height: 3.518vw;
        }
    }
    @media (max-width: 768px) {
        font-size: 3.255vw;
        & > svg {
            width: 4.818vw;
            height: 4.818vw;
        }
    }
`
const ContactButtons = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        margin-top: 2.930vw;
    }
`
const ContactHover = styled(motion.div)`
    position: absolute;
    width: 160px;
    height: 160px;
    background-color: #1B1A1A;
    border-radius: 50%;
    left: -240px;
    top: -10px;
    opacity: 0;
    font-size: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0px, 60px);
    pointer-events: none;

    & > img {
        width: 320px;
        height: 250px;
        -o-object-fit: cover;
        object-fit: cover;
    }
`

const ContactItem = ({ data, pos }) => {

    const theme = useContext(ThemeContext);
    const { inView } = useContext(IntersectionContext);
    const size = useWindowSize();
    const cursorHandlers = useCursorHandlers();

    const control_1 = useAnimation();
    const control_2 = useAnimation();
    const control_3 = useAnimation();
    const control_4 = useAnimation();
    const control_5 = useAnimation();
    const control_6 = useAnimation();

    const variants = {
        hidden: {
            y: 100,
            opacity: 0,
            transition: {
              duration: 1,
              ease: theme.bezier
            }
          },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: theme.bezier
            }
        }
    };

    const mousemove = (event, el) => {
        if (event.target != null) {
            if (size.width > 1235) {
                el.start({ y: 0, opacity: 1, rotate: 0, transition: { duration: 0.7, ease: theme.bezier } })
            }
        }
    }
    const mouseleave = (event, el) => {
        if (event.target) {
            if (size.width > 1235) {
                el.start({ y: 60, opacity: 0, rotate: -6, transition: { duration: 0.5, ease: theme.bezier } })
            }
        }
    }
      
    return(
        <>
            <ContactItemStyled onMouseOver={e => mousemove(e, eval('control_' + (pos+1)))} onMouseLeave={e => mouseleave(e, eval('control_' + (pos+1)))} name="contact"
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={variants}>
                <ContactHover animate={eval('control_' + (pos+1))} initial={{ y: 60, opacity: 0, rotate: -6 }}>{data.image_hover}</ContactHover>
                {data.title}
                <ContactButtons>
                    <ContactButton href={data.link} {...cursorHandlers}>{data.text} <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></ContactButton>
                </ContactButtons>
            </ContactItemStyled>
        </>
    )
}

export default ContactItem;