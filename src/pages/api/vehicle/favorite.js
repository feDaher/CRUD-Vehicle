import validate from '../../../../lib/middlewares/validation'
import createHandler from '../../../../lib/middlewares/nextConnect'
import { favoriteVehicle } from '../../../../modules/vehicle/vehicle.service'
import { favoriteVehicleSchema } from '../../../../modules/vehicle/vehicle.schema'

const favorite = createHandler()
favorite.patch(validate(favoriteVehicleSchema), async (req, res) => {
  try {
    const refreshVehicle = await favoriteVehicle(req.body.id)
    if (refreshVehicle) return res.status(200).send({ ok: true })
    return res.status(400).send('Vehicle not found')
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

export default favorite
