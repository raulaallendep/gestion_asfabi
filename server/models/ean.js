import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const EANSchema = Schema({
  no: { type: Number, required: true },
  description: { type: String },
  items: [{ type: ObjectId, ref: 'IEAN', required: true, default: [] }],
  exw: { type: Number, required: true, default: 0 },
  dc: { type: Number, required: true, default: 0 },
  dpp: { type: Number, required: true, default: 0 },
  puesta: { type: Number, required: true, default: 0 },
  tpuesta: { type: Number, required: true, default: 0 },
  flete: { type: Number, required: true, default: 0 },
  total: { type: Number, required: true, default: 0 },
  cm: { type: Number, required: true, default: 0 },
  cl: { type: Number, required: true, default: 0 },
  oc: { type: Number, required: true, default: 0 },
  tc: { type: Number, required: true, default: 0 },
  tv: { type: Number, required: true, default: 0 },
  vub: { type: Number, required: true, default: 0 },
  ub: { type: Number, required: true, default: 0 },
  expired: { type: String, required: true },
  cv: { type: String, required: true },
  te: { type: String, required: true },
  le: { type: String, required: true },
  fp: { type: String, required: true },
  origen: { type: String, required: true },
  destino: { type: String, required: true },
  moneda: { type: String, required: true },
  garantia: { type: String, required: true }
})

export default mongoose.model('EAN', EANSchema)
