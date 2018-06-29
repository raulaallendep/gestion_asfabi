import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const ClientSchema = Schema({
  name: { type: String, required: true },
  description: { type: String },
  contacts: [{ type: ObjectId, ref: 'CCL', required: true, default: [] }]
  scs: [{ type: ObjectId, ref: 'SC' }],
  cts: [{ type: ObjectId, ref: 'CT' }]
})

export default mongoose.model('Client', ClientSchema)
