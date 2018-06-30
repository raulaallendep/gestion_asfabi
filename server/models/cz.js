import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const CZSchema = Schema({
  code: { type: String, required: true },
  sp: { type: ObjectId, ref: 'SP', required: true },
  provider: { type: ObjectId, ref: 'PR', required: true },
  contact: { type: ObjectId, ref: 'CPR', required: true },
  no: { type: String },
  state: { type: String, required: true },
  created: { type: Date, required: true, default: new Date() },
  expired: { type: Date },
  currency: { type: String, required: true, default: 'EUR' },
  rate: { type: Number, required: true, default: 0 },
  ce: { type: String },
  de: { type: String },
  tf: { type: String },
  fp: { type: String },
  v: { type: String },
  p: { type: String },
  items: [{ type: ObjectId, ref: 'ICZ', required: true, default: [] }],
  oc: { type: ObjectId, ref: 'OC' },
  ans: [{ type: ObjectId, ref: 'AN' }],
  user: { type: ObjectId, ref: 'User', required: true }
})

export default mongoose.model('CZ', CZSchema)
