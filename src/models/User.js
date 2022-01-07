import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  nickname: {type: String, required: true},
  role: {type: String, required: true},
})

export const User = mongoose.model('User', UserSchema)