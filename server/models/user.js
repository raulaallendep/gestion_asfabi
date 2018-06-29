import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const { ObjectId } = Schema.Types

const UserSchema = Schema({
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true, unique: true, index: true },
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  scs: [{ type: ObjectId, ref: 'SC', required: true, default: [] }],
  sps: [{ type: ObjectId, ref: 'SP', required: true, default: [] }],
  czs: [{ type: ObjectId, ref: 'CZ', required: true, default: [] }],
  ans: [{ type: ObjectId, ref: 'AN', required: true, default: [] }],
  ofs: [{ type: ObjectId, ref: 'OF', required: true, default: [] }],
  cts: [{ type: ObjectId, ref: 'CT', required: true, default: [] }],
  ocs: [{ type: ObjectId, ref: 'OC', required: true, default: [] }],
  fts: [{ type: ObjectId, ref: 'FT', required: true, default: [] }]
})

UserSchema.plugin(uniqueValidator)

export default mongoose.model('User', UserSchema)
