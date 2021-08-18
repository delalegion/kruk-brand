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

    @media (min-width: 1920px) {
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
        margin-bottom: 30px;
    }
`
const SocialItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > p {
        font-size: 1.563vw;
        margin-right: 50px;
        color: #b2b2b2;

        @media (min-width: 1920px) {
            font-size: 30px;
        }
        @media (max-width: 768px) {
            font-size: 4vw;
        }
    }
`
const CopyStyled = styled.p`
    padding: 70px 0 30px 0;
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
const Email = styled.p`
    font-size: 1.563vw;
    color: #b2b2b2;

    @media (min-width: 1920px) {
        font-size: 30px;
    }
    @media (max-width: 768px) {
        font-size: 4vw;
    }
`

const Footer = () => {
    return(
        <>
            <FooterStyled>
                <div className="row">
                    <div className="col_12 col_m_8">
                        <Title>Any questions? Feel free to<br /> ask any question! 🤩</Title>
                    </div>
                    <div className="col_12 col_m_4">
                        <SocialTitle>Social media</SocialTitle>
                        <SocialItems>
                            <p>Dribbble</p>
                            <p>Behance</p>
                            <p>Linkedin</p>
                            <p>Github</p>
                            <p>Messenger</p>
                        </SocialItems>
                        <EmailTitle>Email</EmailTitle>
                        <Email>hkrukcontact@gmail.com</Email>
                    </div>
                </div>
                <CopyStyled>
                    Hubert Kruk @ 2020
                </CopyStyled>
            </FooterStyled>
        </>
    )
}

export default Footer;