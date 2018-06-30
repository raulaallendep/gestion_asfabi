import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const IEANSchema = Schema({
  item: { type: String, required: true },
  descriptionC: { type: String, required: true },
  descriptionP: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
  um: { type: String, required: true },
  pu: { type: Number, required: true, default: 0 },
  it: { type: Number, required: true, default: 0 },
  plp: { type: Number, required: true, default: 0 },
  dp: { type: Number, required: true, default: 0 },
  cuexw: { type: Number, required: true, default: 0 },
  itexw: { type: Number, required: true, default: 0 },
  cufeur: { type: Number, required: true, default: 0 },
  itfeur: { type: Number, required: true, default: 0 },
  cufusd: { type: Number, required: true, default: 0 },
  itfusd: { type: Number, required: true, default: 0 }
})

export default mongoose.model('IEAN', IEANSchema)
