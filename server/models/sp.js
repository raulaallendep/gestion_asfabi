import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const SPSchema = Schema({
  code: { type: String, required: true },
  state: { type: String, required: true },
  provider: { type: ObjectId, ref: 'PR', required: true },
  contact: { type: ObjectId, ref: 'CPR', required: true },
  export: { type: String, required: true },
  created: { type: Date, required: true, default: new Date() },
  expired: { type: Date },
  sc: { type: ObjectId, ref: 'SC', required: true },
  items: [{ type: ObjectId, ref: 'ISP', required: true, default: [] }],
  user: { type: ObjectId, ref: 'User', required: true }
})

export default mongoose.model('SP', SPSchema)
