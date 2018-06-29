import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = Schema({
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true, unique: true, index: true },
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  scs: [{ type: ObjectId, ref: 'SC' }],
  sps: [{ type: ObjectId, ref: 'SP' }],
  czs: [{ type: ObjectId, ref: 'CZ' }],
  ans: [{ type: ObjectId, ref: 'AN' }],
  ofs: [{ type: ObjectId, ref: 'OF' }],
  cts: [{ type: ObjectId, ref: 'CT' }],
  ocs: [{ type: ObjectId, ref: 'OC' }],
  fts: [{ type: ObjectId, ref: 'FT' }]
})

UserSchema.plugin(uniqueValidator)

export default mongoose.model('User', UserSchema)
