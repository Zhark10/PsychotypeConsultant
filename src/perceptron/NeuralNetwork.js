import { NeuralNetwork as BrainNeuralNetwork } from '../utils/imports/brain.cjs'
import { CONSTANTS } from '../config/constants.js'
import { User } from '../models/ModelOfUser.js'
import { NeuralUtils } from './NeuralUtils.js'

const config = {
  activation: 'sigmoid',
};

export class NeuralNetwork extends NeuralUtils {
  constructor() {
    super()
    this.network = new BrainNeuralNetwork(config)
  }

  perceptronTrain = async () => {
    const employees = await User.find({ role: CONSTANTS.USER_ROLES.EMPLOYEE })
    const admins = await User.find({ role: CONSTANTS.USER_ROLES.ADMIN })
    const usersForTrainingSet = [...employees, ...admins]
    const testResultsForSelectedUsers = usersForTrainingSet.map(user => user.testAnswers)

    const trainingData = testResultsForSelectedUsers.map(result => ({
      input: result,
      output: { testResult: this.rates.IS_THE_DESIRED_CANDIDATE },
    }))

    this.network.train(trainingData, {
      iterations: 10000,
      logPeriod: 10,
      log: console.log
    })
  }

  runTestAndSendResult = async (candidateId) => {
    const foundCandidate = await User.findById(candidateId).exec();
    const { testAnswers } = foundCandidate
    const answersToTest = testAnswers
    const output = await this.network.run(answersToTest)
    foundCandidate.testResult = output.testResult
    await foundCandidate.save()
  }
}