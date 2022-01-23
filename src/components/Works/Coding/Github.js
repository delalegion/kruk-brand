import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";
import { IntersectionContext } from "hooks/useIntersection";
import useCursorHandlers from "hooks/useCursorHandlers";

const GithubStyled = styled(motion.div)`
    margin-bottom: 20px;
    display: inline-flex;
    @media (min-width: 768px) {
        margin-bottom: 50px;
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
    position: relative;

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

const Github = () => {

    const theme = useContext(ThemeContext);
    const { inView } = useContext(IntersectionContext);
    const cursorHandlers = useCursorHandlers();

    const variants = {
        hidden: {
            y: -100,
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
      
    return(
        <>
            <GithubStyled 
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={variants}>
                <CodingButton href="https://www.github.com/delalegion" {...cursorHandlers}>Github profile <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.24793 26.8651L6.18727 27.9258L8.30859 30.0471L9.36925 28.9864L7.24793 26.8651ZM9.36925 28.9864L25.9863 12.3694L23.8649 10.2481L7.24793 26.8651L9.36925 28.9864Z" fill="#757575"/><path d="M8.30859 11.3086H24.9256V27.9256" stroke="#757575" strokeWidth="3" strokeLinecap="square"/></svg></CodingButton>
            </GithubStyled>
        </>
    )
}

export default Github;