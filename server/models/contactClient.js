import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const CCLSchema = Schema({
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true },
  scs: [{ type: ObjectId, ref: 'SC' }],
  cts: [{ type: ObjectId, ref: 'CT' }]
})

export default mongoose.model('CCL', CCLSchema)
