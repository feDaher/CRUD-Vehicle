import validate from '../../../../lib/middlewares/validation'
import createHandler from '../../../../lib/middlewares/nextConnect'
import {
  vehicleSalved,
  getVehicles,
  deleteVehicle,
  editVehicle
} from '../../../../modules/vehicle/vehicle.service'
import {
  vehicleSchema,
  deleteVehicleSchema,
  editVehicleSchema
} from '../../../../modules/vehicle/vehicle.schema'

const vehicleadd = createHandler()
vehicleadd
  .post(validate({ body: vehicleSchema }), async (req, res) => {
    try {
      const vehicle = await vehicleSalved(req.body)
      res.status(201).json(vehicle)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .get(async (req, res) => {
    try {
      const vehicles = await getVehicles()
      res.status(200).send(vehicles)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .delete(validate(deleteVehicleSchema), async (req, res) => {
    try {
      const deletedVehicle = await deleteVehicle(req.body.id)
      if (deletedVehicle) return res.status(200).send({ ok: true })
      return res.status(400).send('Vehicle not found')
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .patch(validate(editVehicleSchema), async (req, res) => {
    try {
      const refreshVehicle = await editVehicle(req.body)
      if (refreshVehicle) return res.status(200).send({ ok: true })
      return res.status(400).send('Vehicle not found')
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

export default vehicleadd
