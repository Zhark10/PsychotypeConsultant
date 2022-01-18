import { NeuralNetwork as BrainNeuralNetwork } from '../utils/imports/brain.cjs'
import { CONSTANTS } from '../config/constants.js'
import { User } from '../models/User.js'
import { NeuralUtils } from './NeuralUtils.js'

export class NeuralNetwork extends NeuralUtils {
  constructor() {
    super()
    this.network = new BrainNeuralNetwork()
  }

  perceptronTrain = async () => {
    const employees = User.find({ role: CONSTANTS.USER_ROLES.EMPLOYEE })
    const testResultsByEmployees = employees.map(employee => employee.testResult)
    const trainingData = testResultsByEmployees.map(result => ({
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