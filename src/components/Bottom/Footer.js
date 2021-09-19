import styled from "styled-components";

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
            margin: 1.5vw 0;
        }
    }
    @media (max-width: 1024px) {
        & > p {
            margin: 0;
            margin-bottom: 2vw;
        }
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

    @media (min-width: 1920px) {
        font-size: 30px;
    }
    @media (max-width: 768px) {
        font-size: 4vw;
    }
`

const Footer = ({ social }) => {
    return(
        <>
            <FooterStyled>
                {!social ? (
                    <div className="row">
                        <div className="col_12 col_m_8">
                            <Title>Any questions?<br/> Feel free to ask! 🤩</Title>
                        </div>
                        <div className="col_12 col_m_4">
                            <SocialTitle>Social media</SocialTitle>
                            <SocialItems>
                                <p><a className="hover-this" href="https://www.dribbble.com/hubkruczek"><span>Dribbble</span></a></p>
                                <p><a className="hover-this" href="https://www.behance.com/hubkruczek"><span>Behance</span></a></p>
                                <p><a className="hover-this" href="https://www.linkedin.com/in/hubert-kruk/"><span>Linkedin</span></a></p>
                                <p><a className="hover-this" href="https://www.github.com/delalegion"><span>Github</span></a></p>
                                <p><a className="hover-this" href="https://www.m.me/krukhubert"><span>Messenger</span></a></p>
                            </SocialItems>
                            <EmailTitle>Email</EmailTitle>
                            <Email href="mailto:hkrukcontact@gmail.com">hkrukcontact@gmail.com</Email>
                        </div>
                    </div>
                ) : ''}
                <CopyStyled>
                    Hubert Kruk @ 2020
                </CopyStyled>
            </FooterStyled>
        </>
    )
}

export default Footer;