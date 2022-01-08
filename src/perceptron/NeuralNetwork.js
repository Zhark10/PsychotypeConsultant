import brain from 'brain.js'
import { CONSTANTS } from '../config/constants.js'
import { User } from '../models/User.js'
import { NeuralUtils } from './NeuralUtils.js'

export class NeuralNetwork extends NeuralUtils {
  constructor() {
    this.network = new brain.NeuralNetwork()
  }

  perceptronTrain = async () => {
    const employees = User.find({role: CONSTANTS.USER_ROLES.EMPLOYEE})
    const testResultsByEmployees = employees.map(employee => employee.testResult)
    const trainingData = testResultsByEmployees.map(result => {
      return {
        input: result,
        output: this.rates.IS_THE_DESIRED_CANDIDATE,
      }
    })

    this.network.train(trainingData, {
      iterations: 10000,
      logPeriod: 10,
      log: console.log
    })
  }
}