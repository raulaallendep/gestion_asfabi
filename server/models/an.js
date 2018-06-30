import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const ANSchema = Schema({
  code: { type: String, required: true },
  fn: { type: Number, required: true },
  rate: { type: Number, required: true },
  dl: { type: Number, required: true },
  oc: { type: Number, required: true },
  mc: { type: Number, required: true },
  created: { type: Date, required: true, default: new Date() },
  sc: { type: ObjectId, ref: 'SC', required: true },
  czs: [{ type: ObjectId, ref: 'CZ', required: true, default: [] }],
  eans: [{ type: ObjectId, ref: 'EAN', required: true, default: [] }],
  ofs: [{ type: ObjectId, ref: 'OF' }],
  user: { type: ObjectId, ref: 'User', required: true }
})

export default mongoose.model('AN', ANSchema)
