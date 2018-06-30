import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const SCSchema = Schema({
  code: { type: String, required: true },
  no: { type: String },
  state: { type: String, required: true },
  client: { type: ObjectId, ref: 'CL', required: true },
  contact: { type: ObjectId, ref: 'CCL', required: true },
  created: { type: Date, required: true, default: new Date() },
  expired: { type: Date },
  description: { type: String, required: true },
  items: [{ type: ObjectId, ref: 'ISC', required: true, default: [] }],
  sps: [{ type: ObjectId, ref: 'SP' }],
  ans: [{ type: ObjectId, ref: 'AN' }],
  ofs: [{ type: ObjectId, ref: 'OF' }],
  cts: [{ type: ObjectId, ref: 'CT' }],
  user: { type: ObjectId, ref: 'User', required: true }
})

export default mongoose.model('SC', SCSchema)
