import mongoose, { Schema } from 'mongoose'

const ISPSchema = Schema({
  item: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
  um: { type: String, required: true }
})

export default mongoose.model('ISP', ISPSchema)
