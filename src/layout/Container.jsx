import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 30px 0;
`
const StyledChildren = styled.div`
  background-color: rgb(236, 236, 236);
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.25);
`

function Container({ children }) {
  return (
    <>
      <StyledContainer>
        <StyledChildren>{children}</StyledChildren>
      </StyledContainer>
    </>
  )
}

export default Container
