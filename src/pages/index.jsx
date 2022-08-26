import Input from '../components/Input'
import Button from '../components/Button'
import styled from 'styled-components'
import Link from 'next/link'
import H1 from '../typograph/H1'
import Cards, { HandleFavorite } from '../components/cards/Cards'
import axios from 'axios'
import { useState } from 'react'
import useSWR from 'swr'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 15px;
  margin: 0 30px;
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: auto auto;
    margin: 0 10px;
  }
  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: auto;
    margin: 0 2px;
  }
`
const fetcher = (url) => axios.get(url).then((res) => res.data)

function HomePage() {
  const [vehicle, setVehicle] = useState('')
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicle/vehicleadd`, fetcher)

  const search = (data) => {
    return data?.filter(
      (item) =>
        item.name?.toLowerCase().includes(vehicle) ||
        item.brand?.toLowerCase().includes(vehicle) ||
        item.color?.toLowerCase().includes(vehicle) ||
        item.year?.toLowerCase().includes(vehicle) ||
        item.plate?.toLowerCase().includes(vehicle) ||
        item.price?.toLowerCase().includes(vehicle) ||
        item.descrition?.toLowerCase().includes(vehicle)
    )
  }

  return (
    <>
      <PageContainer>
        <Input
          type="text"
          name="search"
          placeholder="Buscar"
          onChange={(event) => setVehicle(event.target.value)}
        />
        <Link href="/vehicleAdd">
          <Button>ADICIONAR</Button>
        </Link>
      </PageContainer>
      <StyledDiv />
      <HandleFavorite />
      <H1 />
      <StyledDiv>
        {search(data)?.map((item) => (
          <Cards key={item._id} vehicle={item} id={item._id} />
        ))}
      </StyledDiv>
    </>
  )
}

export default HomePage
