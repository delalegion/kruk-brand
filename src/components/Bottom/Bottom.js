import styled from "styled-components";
import background from "../../assets/background_footer.png";
import circles from "../../assets/background_footer_circles.png";

const BottomStyled = styled.section`
    background-color: #000;
    padding: 50px 0;
    position: relative;
    z-index: 10;
    background-image: url(${background});
    background-size: contain;
	background-position: bottom center;
    background-repeat: no-repeat;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`
const Background = styled.img`
    position: absolute;
    bottom: -300px;
    right: 0;
    z-index: 0;
    width: 1500px;

    @media (max-width: 1920px) {
        width: 100%;
        bottom: -200px;
    }
    @media (max-width: 768px) {
        bottom: -50px;
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