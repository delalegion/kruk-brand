import styled from "styled-components";
import PropTypes from 'prop-types';
import Title from "components/Bottom/Title";
import { IntersectionObserver } from "hooks/useIntersection";
import SocialMedia from "./SocialMedia";
import Sphere from "sphere";

const FooterStyled = styled.footer`
    margin-top: 200px;
    color: white;
    z-index: 19;
    position: relative;

    @media (max-width: 768px) {
        margin-top: 50px;
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

const Footer = ({ social }) => {

    return(
        <>
            <FooterStyled>
                {!social ? (
                    <div className="row">
                        <div className="col_12 col_m_8">
                            <IntersectionObserver>
                                <Title>Any questions?<br/> Feel free to ask! 🤩</Title>
                            </IntersectionObserver>
                        </div>
                        <div className="col_12 col_m_4">
                        <IntersectionObserver>
                            <SocialMedia />
                        </IntersectionObserver>
                        </div>
                    </div>
                ) : ''}
                <CopyStyled>
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