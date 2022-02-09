import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  nickname: { type: String, required: true },
  prevQuestionId: { type: Number, required: false },
  testAnswers: { type: [Number], required: false },
  testResult: { type: Number, required: false },
  role: { type: String, required: true },
})

export const User = mongoose.model('User', UserSchema)
