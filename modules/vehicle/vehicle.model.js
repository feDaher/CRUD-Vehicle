import mongoose from 'mongoose'

const VehicleSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 30 },
  brand: { type: String, required: true, maxlength: 30 },
  color: { type: String, required: true, maxlength: 20 },
  year: { type: String, required: true, maxlength: 4 },
  plate: { type: String, required: true, maxlength: 8, unique: true },
  price: { type: String, required: true, maxlength: 20 },
  descrition: { type: String, required: true, maxlength: 50 }
})

export default mongoose.models.Vehicle || mongoose.model('Vehicle', VehicleSchema)
