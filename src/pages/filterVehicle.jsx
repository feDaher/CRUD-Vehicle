import Container from '../layout/Container'
import styled from 'styled-components'
import Link from 'next/link'
import { DropDownBrand, DropDownColor, DropDownYear } from '../components/dropdown/filterDropDown'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledDivButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const StyledButton = styled.button`
  font-size: 18px;
  margin: 40px 50px 20px 0;
  padding: 10px 15px;
  border-radius: 50px;
  border: none;
  background-color: ${(props) => props.theme.button};
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
  @media (max-width: 430px) {
    margin: 20px 30px 20px 0;
  }
`
const StyledImg = styled.img`
  width: 50px;
  cursor: pointer;
`
const StyledDivPrice = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledSpan = styled.span`
  margin-top: 30px;
  font-size: 18px;
`
const StyledInputPrice = styled.input`
  font-size: 15px;
  width: 120px;
  padding: 12px 20px;
  margin: 5px 5px;
  border-radius: 50px;
  border: solid 1px black;
  background-color: white;
  &:focus {
    outline: none;
  }
  @media (max-width: 380px) {
    width: 80px;
  }
`
const DivInputPrice = styled.div`
  display: flex;
  justify-content: space-around;
`
const Label = styled.label`
  margin: 15px 20px 2px 20px;
  font-size: 18px;
`
const onSubmit = () => {}
function FilterVehicle() {
  return (
    <>
      <Container>
        <Link href="/">
          <StyledImg src="../iconeSeta.png" />
        </Link>
        <Form onSubmit={onSubmit}>
          <Label>Marca:</Label>
          <DropDownBrand />
          <Label>Cor:</Label>
          <DropDownColor />
          <Label>Ano:</Label>
          <DropDownYear />
          <StyledDivPrice>
            <StyledSpan>Preço mín.</StyledSpan>
            <StyledSpan>Preço máx.</StyledSpan>
          </StyledDivPrice>
          <DivInputPrice>
            <StyledInputPrice />
            <StyledInputPrice />
          </DivInputPrice>
          <StyledDivButton>
            <StyledButton>SALVAR</StyledButton>
          </StyledDivButton>
        </Form>
      </Container>
    </>
  )
}

export default FilterVehicle
