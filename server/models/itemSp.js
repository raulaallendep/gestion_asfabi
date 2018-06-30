import mongoose, { Schema } from 'mongoose'

const SPISchema = Schema({
  item: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
  um: { type: String, required: true }
})

export default mongoose.model('SPI', SPISchema)
