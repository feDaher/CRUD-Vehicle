import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { fetchVehicle } from './vehiclefilter'

const Seletion = styled.select`
  margin: 0 20px;
  padding: 2px 10px;
  font-size: 16px;
  height: 35px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
export const DropDownBrand = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetchVehicle().then((data) => {
      setBrands(data.data)
    })
  }, [])
  return (
    <Seletion>
      <option id="brand">Selecione uma marca...</option>
      {brands?.map((vehicles) => {
        return <option key={vehicles.id}>{vehicles.brand}</option>
      })}
    </Seletion>
  )
}

export const DropDownColor = () => {
  const [colors, setColors] = useState([])

  useEffect(() => {
    fetchVehicle().then((data) => {
      setColors(data.data)
    })
  }, [])
  return (
    <Seletion id="color">
      <option>Selecione uma cor...</option>
      {colors?.map((vehicles) => {
        return <option key={vehicles.id}>{vehicles.color}</option>
      })}
    </Seletion>
  )
}

export const DropDownYear = () => {
  const [years, setYears] = useState([])

  useEffect(() => {
    fetchVehicle().then((data) => {
      setYears(data.data)
    })
  }, [])
  return (
    <Seletion id="year">
      <option>Selecione um ano...</option>
      {years?.map((vehicles) => {
        return <option key={vehicles.id}>{vehicles.year}</option>
      })}
    </Seletion>
  )
}
