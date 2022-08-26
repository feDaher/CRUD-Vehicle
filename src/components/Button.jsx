import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px 80px;
  border-radius: 50px;
  border: none;
  background-color: ${(props) => props.theme.button};
  cursor: pointer;
  font-weight: bold;
  color: rgb(41, 70, 65);
  font-size: 16px;
  opacity: 90%;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
  @media (max-width: 700px) {
    padding: 15px 80px;
  }
  @media (max-width: 400px) {
    padding: 15px 80px;
    margin-left: 20px;
  }
`
const ImgAdd = styled.img`
  width: 20px;
  position: absolute;
  margin: 28px;
  @media (max-width: 700px) {
    margin: 35px;
  }
  @media (max-width: 375px) {
    margin: 35px 35px 35px 50px;
  }
`
export default function Button(props) {
  return (
    <>
      <div>
        <ImgAdd src="./iconeAdd.png" />
        <ButtonStyled {...props} />
      </div>
    </>
  )
}
