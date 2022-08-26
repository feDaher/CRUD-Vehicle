import styled from 'styled-components'
import Link from 'next/link'

const StyledFlex = styled.div`
  display: flex;
`
const ImageSelect = styled.img`
  margin-top: 10px;
  height: 35px;
  width: 45px;
  margin-left: 5px;
  cursor: pointer;
`
const InputStyled = styled.input`
  display: flex;
  position: relative;
  padding: 15px 50px;
  font-size: 16px;
  border-radius: 50px;
  border: none;
  background-color: rgb(205, 241, 235);
  width: 500px;
  background-size: 18px;
  opacity: 90%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
    color: rgb(83, 97, 95);
  }
  @media (max-width: 700px) {
    padding: 15px 50px;
    width: 250px;
  }
  @media (max-width: 420px) {
    width: 130px;
    margin-left: 5px;
  }
  @media (max-width: 375px) {
    width: 130px;
    margin-left: 50px;
  }
`
const ImgSearch = styled.img`
  width: 20px;
  position: absolute;
  margin: 15px;
  cursor: pointer;
  @media (max-width: 375px) {
    margin-left: 60px;
  }
`
export default function Input(props) {
  return (
    <>
      <StyledFlex>
        <InputStyled {...props} />
        <ImgSearch src="./lupa.svg" />
        <Link href="/filterVehicle">
          <ImageSelect src="../iconeSelecao.png" />
        </Link>
      </StyledFlex>
    </>
  )
}
