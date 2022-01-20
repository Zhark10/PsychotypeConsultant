import { NeuralNetwork as BrainNeuralNetwork } from '../utils/imports/brain.cjs'
import { CONSTANTS } from '../config/constants.js'
import { User } from '../models/ModelOfUser.js'
import { NeuralUtils } from './NeuralUtils.js'

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3],
  activation: 'sigmoid',
  leakyReluAlpha: 0.01,
};

export class NeuralNetwork extends NeuralUtils {
  constructor() {
    super()
    this.network = new BrainNeuralNetwork(config)
  }

  perceptronTrain = async () => {
    const employees = User.find({ role: CONSTANTS.USER_ROLES.EMPLOYEE })
    const admins = User.find({ role: CONSTANTS.USER_ROLES.ADMIN})
    const usersForTrainingSet = [...employees, ...admins]
    const testResultsForSelectedUsers = usersForTrainingSet.map(employee => employee.testResult)
    const trainingData = testResultsForSelectedUsers.map(result => ({
      input: result,
      output: this.rates.IS_THE_DESIRED_CANDIDATE,
    }))

    this.network.train(trainingData, {
      iterations: 10000,
      logPeriod: 10,
      log: console.log
    })
  }
}