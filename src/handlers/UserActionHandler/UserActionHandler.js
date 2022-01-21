import { NeuralNetwork } from "../../perceptron/NeuralNetwork.js"
import { UserActionHandlerHelpersBy } from "./UserActionHandlerHelpers.js"
import { CONSTANTS } from "../../config/constants.js"
import { User } from '../../models/ModelOfUser.js'
import { PsychotypeData } from "../../perceptron/NeuralPsychotypeTest.js"

const { test } = PsychotypeData

export const UserActionHandler = async (bot) => {
  let definedService;
  const neuralNetwork = new NeuralNetwork();

  bot.on("message", async (msg) => {
    const dependencies = { bot, msg, neuralNetwork }
    definedService = await UserActionHandlerHelpersBy.messages.defineService(msg, dependencies)
    const action = definedService[msg.text] || definedService[CONSTANTS.COMMANDS.THROW_FALLBACK_MESSAGE]
    return action()
  })

  bot.on("callback_query", async (callbackQuery) => {
    const msg = callbackQuery.message;
    const chatId = msg.chat.id
    const userDataToSearch = { firstname: msg.chat.first_name, lastname: msg.chat.last_name, nickname: msg.chat.username }

    const answerId = callbackQuery.data;
    const updatedUser = await User.findOneAndUpdate(
      userDataToSearch,
      { $push: { testAnswers: answerId } },
      { new: true },
    )

    if (updatedUser.testAnswers.length >= test.length) {
      bot.sendMessage(chatId, 'Тест завершен! Спасибо за участие!')
      const isForTrainingSet = [CONSTANTS.USER_ROLES.ADMIN, CONSTANTS.USER_ROLES.EMPLOYEE].includes(updatedUser.role)
      if (isForTrainingSet) {
        await neuralNetwork.perceptronTrain()
      }
      neuralNetwork.runTestAndSendResult(updatedUser.id)
    } else {
      const action = definedService[CONSTANTS.COMMANDS.ASK_NEXT_QUESTION]
      return action(updatedUser.testAnswers.length)
    }
  });
}