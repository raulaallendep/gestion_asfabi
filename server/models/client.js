import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const ClientSchema = Schema({
  name: { type: String, required: true },
  description: { type: String },
  contacts: [{ type: ObjectId, ref: 'CCL', required: true, default: [] }],
  // solicitudes
  scs: [{ type: ObjectId, ref: 'SC' }],
  // contratos
  cts: [{ type: ObjectId, ref: 'CT' }]
})

export default mongoose.model('Client', ClientSchema)
