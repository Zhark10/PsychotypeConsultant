import mongoose from 'mongoose'

const TestSchema = mongoose.Schema({}) // TODO: Придумать структуру теста по психотипу

export const Test = mongoose.model('Test', TestSchema)