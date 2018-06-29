import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const CPRSchema = Schema({
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true },
  sps: [{ type: ObjectId, ref: 'SP' }],
  cts: [{ type: ObjectId, ref: 'CT' }]
})

export default mongoose.model('CPR', CPRSchema)
