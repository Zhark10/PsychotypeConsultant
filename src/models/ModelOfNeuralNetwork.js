import mongoose from 'mongoose'

const NeuralNetworkSchema = mongoose.Schema({
  trainingSet: { type: Array, required: true },
})

export const NeuralNetwork = mongoose.model(
  'NeuralNetwork',
  NeuralNetworkSchema
)
