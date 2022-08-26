import axios from 'axios'

export const fetchVehicle = () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/vehicle/vehicleadd/`
  return axios(url).then((response) => response)
}
