import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const PRSchema = Schema({
  name: { type: String, required: true },
  description: { type: String },
  contacts: [{ type: ObjectId, ref: 'CPR', required: true, default: [] }],
  sps: [{ type: ObjectId, ref: 'SP' }],
  ocs: [{ type: ObjectId, ref: 'OC' }]
})

export default mongoose.model('PR', PRSchema)
