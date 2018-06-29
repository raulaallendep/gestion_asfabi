import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const ClientSchema = Schema({
  company: { type: String, required: true },
  description: { type: String },
  contacts: [{ type: ObjectId, ref: 'CC', required: true, default: [] }]
})

export default mongoose.model('Client', ClientSchema)
