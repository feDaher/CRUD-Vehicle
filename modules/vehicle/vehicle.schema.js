import Joi from 'joi'
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const vehicleSchema = Joi.object({
  name: Joi.string().required().max(30),
  brand: Joi.string().required().max(30),
  color: Joi.string().required().max(20),
  year: Joi.string()
    .required()
    .min(4)
    .max(4)
    .message('Digite um ano válido, máximo quatro numeros.'),
  plate: Joi.string()
    .required()
    .min(7)
    .max(8)
    .message('Digite uma placa válida, máximo oito caracteres.'),
  price: Joi.string().required().max(20).message('Esse campo pode ter no máximo 20 caracteres'),
  descrition: Joi.string().required().max(50).message('Esse campo pode ter no máximo 50 caracteres')
})

export const deleteVehicleSchema = Joi.object({
  id: Joi.objectId().required()
})

export const editVehicleSchema = Joi.object({
  id: Joi.objectId().required(),
  name: Joi.string().required().max(30),
  brand: Joi.string().required().max(30),
  color: Joi.string().required().max(20),
  year: Joi.string()
    .required()
    .min(4)
    .max(4)
    .message('Digite um ano válido, máximo quatro numeros.'),
  plate: Joi.string()
    .required()
    .min(7)
    .max(8)
    .message('Digite uma placa válida, máximo oito caracteres.'),
  price: Joi.string().required().max(20).message('Esse campo pode ter no máximo 20 caracteres'),
  descrition: Joi.string().required().max(50).message('Esse campo pode ter no máximo 50 caracteres')
})
