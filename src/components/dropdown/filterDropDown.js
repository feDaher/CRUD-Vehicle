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
  // eslint-disable-next-line no-undef
  const uniqueBrands = [...new Set(brands.map((vehicle) => vehicle.brand.toLowerCase()))]
    .map((brand) => brand.toUpperCase())
    .sort()

  return (
    <Seletion>
      <option id="brand">Selecione uma marca...</option>
      {uniqueBrands.map((brand) => {
        return <option key={brand}>{brand}</option>
      })}
    </Seletion>
  )
}

export const DropDownColor = () => {
  const [colors, setColors] = useState([])

  useEffect(() => {
    fetchVehicle().then((data) => {
      setColors(data.data)
      console.log(data)
    })
  }, [])
  // eslint-disable-next-line no-undef
  const uniqueColors = [...new Set(colors.map((vehicle) => vehicle.color.toLowerCase()))]
    .map((color) => color.toUpperCase())
    .sort()
  return (
    <Seletion id="color">
      <option id="color">Selecione uma cor...</option>
      {uniqueColors.map((colors) => {
        return <option key={colors}>{colors}</option>
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

  const uniqueYears = [
    // eslint-disable-next-line no-undef
    ...new Set(years.map((vehicle) => vehicle.year))
  ].sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  return (
    <Seletion id="year">
      <option id="year">Selecione um ano...</option>
      {uniqueYears.map((years) => {
        return <option key={years}>{years}</option>
      })}
    </Seletion>
  )
}
