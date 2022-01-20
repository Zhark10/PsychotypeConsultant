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
    const employees = await User.find({ role: CONSTANTS.USER_ROLES.EMPLOYEE })
    const admins = await User.find({ role: CONSTANTS.USER_ROLES.ADMIN })

    const usersForTrainingSet = [...employees, ...admins]

    const getCorrectTestAnswers = user => user.testAnswers.map(Number)
    const testResultsForSelectedUsers = usersForTrainingSet.map(getCorrectTestAnswers)
    console.log('testResultsForSelectedUsers', testResultsForSelectedUsers)

    const trainingData = testResultsForSelectedUsers.map(result => ({
      input: result,
      output: this.rates.IS_THE_DESIRED_CANDIDATE,
    }))

    console.log('trainingData', trainingData)
    this.network.train(trainingData, {
      iterations: 10000,
      logPeriod: 1000,
      log: console.log
    })
  }

  runTestAndSendResult = async (candidateId) => {
    const foundCandidate = await User.findById(candidateId).exec();
    const { testAnswers } = foundCandidate
    const output = this.network.run(testAnswers.map(Number))
    console.log('foundCandidate', output)
  }
}