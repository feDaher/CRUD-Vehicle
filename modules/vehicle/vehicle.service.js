import Vehicle from './vehicle.model'

export const vehicleSalved = async (body) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const vehicle = {
      ...body
    }
    const dbVehicle = await Vehicle.create(vehicle)
    return dbVehicle
  } catch (err) {
    throw err
  }
}

export const getVehicles = async () => {
  const vehicles = await Vehicle.find()
  return vehicles
}

export const deleteVehicle = async (id) => {
  return await Vehicle.findOneAndDelete({
    _id: id
  })
}

export const editVehicle = async (body) => {
  return await Vehicle.findOneAndUpdate(
    {
      _id: body.id
    },
    {
      name: body.name
    }
  )
}
