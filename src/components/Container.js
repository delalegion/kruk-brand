import styled from 'styled-components';

const ContainerStyled = styled.div`
  max-width: 1620px;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
  overflow: hidden;

  @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
  }
`

const Container = (props) => {
    return(
        <>
            <ContainerStyled>
                { props.children }
            </ContainerStyled>
        </>
    )
}

export default Container;