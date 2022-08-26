import { forwardRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: 15px;
  width: 400px;
  padding: 15px 15px;
  margin: 5px 60px;
  border-radius: 50px;
  border: none;
  background-color: white;
  &:focus {
    outline: none;
  }
  @media (max-width: 490px) {
    width: 320px;
  }
  @media (max-width: 400px) {
    width: 270px;
  }
  @media (max-width: 320px) {
    width: 200px;
  }
`
const StyledError = styled.span`
  margin-left: 70px;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.error};
`
const errorMessage = {
  'string.empty': 'Este campo é obrigátorio.',
  'string.min': 'Digite um valor válido para o campo acima.',
  duplicated: 'Placa já existente.'
}
// eslint-disable-next-line react/display-name
const InputAdd = forwardRef(({ error, ...props }, ref) => {
  return (
    <>
      <StyledInput {...props} ref={ref} />
      {error && <StyledError>{errorMessage[error.type] || error.message}</StyledError>}
    </>
  )
})

export default InputAdd
