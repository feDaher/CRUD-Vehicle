import styled from 'styled-components'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { vehicleSchema } from '../../modules/vehicle/vehicle.schema'
import axios from 'axios'
import { useRouter } from 'next/router'
import InputAdd from './InputAddVehicle'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledDivButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const StyledLabel = styled.label`
  margin-left: 70px;
  margin-top: 15px;
  font-size: 18px;
`
const StyledButton = styled.button`
  font-size: 18px;
  margin: 20px 50px 20px 0;
  padding: 10px 15px;
  border-radius: 50px;
  border: none;
  background-color: ${(props) => props.theme.button};
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
  :disabled {
    background-color: rgb(290, 280, 280);
    cursor: default;
  }
`
const StyledImg = styled.img`
  width: 50px;
  cursor: pointer;
`
function FormAddVehicle() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: joiResolver(vehicleSchema)
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/vehicle/vehicleadd`,
        data
      )
      if (status === 201) {
        router.push('/')
      }
    } catch (err) {
      if (err.response.data.code === 11000) console.log(errors)
      setError(err.response.data.duplicatedKey, {
        type: 'duplicated'
      })
    }
  }
  return (
    <>
      <Link href="/">
        <StyledImg src="../iconeSeta.png" />
      </Link>
      <StyledForm onSubmit={handleSubmit(handleForm)}>
        <StyledLabel>Nome:</StyledLabel>
        <InputAdd id="name" {...register('name')} error={errors.name} />
        <StyledLabel>Marca:</StyledLabel>
        <InputAdd id="brand" {...register('brand')} error={errors.brand} />
        <StyledLabel>Cor:</StyledLabel>
        <InputAdd id="color" {...register('color')} error={errors.color} />
        <StyledLabel>Ano:</StyledLabel>
        <InputAdd id="year" {...register('year')} error={errors.year} />
        <StyledLabel>Placa:</StyledLabel>
        <InputAdd id="plate" {...register('plate')} error={errors.plate} />
        <StyledLabel>Preço:</StyledLabel>
        <InputAdd id="price" {...register('price')} error={errors.price} />
        <StyledLabel>Descrição:</StyledLabel>
        <InputAdd id="descrition" {...register('descrition')} error={errors.descrition} />
        <StyledDivButton>
          <StyledButton type="submit" disabled={Object.keys(errors).length > 0}>
            SALVAR
          </StyledButton>
        </StyledDivButton>
      </StyledForm>
    </>
  )
}

export default FormAddVehicle
