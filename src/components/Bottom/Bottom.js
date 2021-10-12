import styled from "styled-components";
import background from "../../assets/background_footer.png";
import circles from "../../assets/background_footer_circles.png";
import PropTypes from 'prop-types';

const BottomStyled = styled.section`
    padding: 0 0 50px 0;
    position: relative;
    z-index: 10;
    background-image: url(${background});
    background-size: 200%;
	background-position: bottom center;
    background-repeat: no-repeat;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`
const Background = styled.svg`
    position: absolute;
    bottom: -10px;
    right: 0px;
    z-index: 0;
    width: 1500px;

    @media (max-width: 768px) {
        bottom: -950px;
        left: 0px;
    }
`

const Bottom = (props) => {
    return(
        <>
            <BottomStyled>
                {props.children}

                <Background src={circles} alt="" />
            </BottomStyled>
        </>
    )
}

export default Bottom;

Bottom.propTypes = {
    children: PropTypes.node
};