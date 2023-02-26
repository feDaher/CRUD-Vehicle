import styled from 'styled-components'
import { TiDeleteOutline } from 'react-icons/Ti'
import { FaRegEdit } from 'react-icons/fa'
import { MdFavoriteBorder } from 'react-icons/md'
import axios from 'axios'
import { useSWRConfig } from 'swr'
import Link from 'next/link'
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'

const CardContainer = styled.div`
  background-color: ${(props) => props.color};
  padding: 0 5px;
  box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.4);
  margin: 0 10px;
  min-width: 380px;
  @media (max-width: 560px) {
    width: 100%;
    margin: 2px;
  }
`
const ContainerMenu = styled.div`
  float: right;
`

const transformColor = (color) => {
  const normalizedColor = color.toLowerCase().replace(/[\s-]/g, '')
  const colors = {
    branco: '#ffffff',
    branca: '#ffffff',
    vermelho: 'rgb(199, 0, 0)',
    rosa: 'rgb(255, 100, 255)',
    verde: 'rgb(0, 180, 0)',
    prata: 'silver',
    azul: 'rgb(20, 100, 255)',
    azulmetalico: 'rgb(50, 70, 90)',
    azulmarinho: '#000080',
    preto: 'rgb(0, 0, 0, 0.80)',
    preta: 'rgb(0, 0, 0, 0.80)',
    amarelo: 'yellow',
    laranja: 'orange',
    cinza: 'grey',
    marrom: '	#5C4033',
    roxo: 'purple',
    roxa: 'purple'
  }
  return colors[normalizedColor] || 'rgb(190, 190, 190, 0.35)'
}
const DivContainer = styled.div`
  display: flex;
`
const DivMenu = styled.div`
  cursor: pointer;
  margin: 5px 0 0 12px;
`

function Cards({ vehicle, id }) {
  const { mutate } = useSWRConfig()
  const [isFavorite, setIsFavorite] = useState(id.isFavorite)

  useEffect(() => {}, [id])

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/vehicle/vehicleadd`,
        {
          data: {
            id
          }
        }
      )
      if (response.status === 200)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicle/vehicleadd`)
    } catch (err) {
      console.error(err)
    }
  }

  const handleEdit = async () => {
    try {
      {
        await axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicle/vehicleadd/`)
          .then((response) => {
            console.log(response.data)
          })
      }
    } catch (err) {
      console.error(err)
    }
  }
  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }
  const addToFavorites = async (id) => {
    try {
      {
        const response = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/vehicle/favorite`,
          {
            id
          }
        )
        console.log(response)
        if (response.status === 200)
          mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicle/favorite`)
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <CardContainer
        className={isFavorite ? 'favorite' : ''}
        color={transformColor(vehicle.color.toLowerCase())}
      >
        <ContainerMenu>
          <DivContainer>
            <DivMenu>
              <Link href={`/vehicleAdd/`}>
                <FaRegEdit onClick={() => handleEdit(id.id)} />
              </Link>
            </DivMenu>
            <DivMenu>
              <TiDeleteOutline onClick={() => handleDelete(id.id)} />
            </DivMenu>
            <DivMenu>
              <MdFavoriteBorder
                onClick={() => {
                  handleFavorite(id)
                  addToFavorites(id.id)
                  console.log(id)
                }}
                color={isFavorite ? 'red' : 'black'}
              />
            </DivMenu>
          </DivContainer>
        </ContainerMenu>
        <p>{vehicle.name.toUpperCase()}</p>
        <p>Marca: {vehicle.brand}</p>
        <p>Cor: {vehicle.color}</p>
        <p>Ano: {vehicle.year}</p>
        <p>Placa: {vehicle.plate}</p>
        <p>Preço: {vehicle.price}</p>
        <p>Descrição: {vehicle.descrition}</p>
      </CardContainer>
      <style>
        {`
          .favorite {
            background-color: #ffebee;
            border: 2px solid red;
          }
        `}
      </style>
    </>
  )
}

export default Cards
