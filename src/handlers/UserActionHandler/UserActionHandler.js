import { NeuralNetwork } from '../../perceptron/NeuralNetwork.js'
import { UserActionHandlerHelpersBy } from './UserActionHandlerHelpers.js'
import { CONSTANTS } from '../../config/constants.js'
import { User } from '../../models/ModelOfUser.js'
import { PsychotypeData } from '../../perceptron/NeuralPsychotypeTest.js'
import { TemplateService } from '../../services/template/TemplateService.js'
import { getCommonUserInfoByMsg } from '../../utils/get-common-user-info.js'

const { test } = PsychotypeData

export const UserActionHandler = async (bot) => {
  let definedService
  const neuralNetwork = new NeuralNetwork()
  const templateService = new TemplateService()

  bot.on('message', async (msg) => {
    const dependencies = { bot, msg, neuralNetwork, templateService }
    definedService = await UserActionHandlerHelpersBy.messages.defineService(
      msg,
      dependencies
    )
    const action =
      definedService[msg.text] ||
      definedService[CONSTANTS.COMMANDS.THROW_FALLBACK_MESSAGE]
    return action()
  })

  bot.on('callback_query', async (callbackQuery) => {
    const msg = callbackQuery.message
    const chatId = msg.chat.id
    const answerId = callbackQuery.data
    const user = getCommonUserInfoByMsg(msg)
    const updatedUser = await User.findOneAndUpdate(
      user,
      { $push: { testAnswers: answerId } },
      { new: true }
    )

    if (updatedUser.testAnswers.length >= test.length) {
      const message =
        'Тест завершен! Спасибо за участие! После проверки результатов с вами свяжутся!'
      const createdPicture =
        await templateService.createTemplateForSimpleMessage(message)
      bot.sendPhoto(chatId, createdPicture)
      const isForTrainingSet = [
        CONSTANTS.USER_ROLES.ADMIN,
        CONSTANTS.USER_ROLES.EMPLOYEE,
      ].includes(updatedUser.role)
      if (isForTrainingSet) return neuralNetwork.perceptronTrain()
      return neuralNetwork.runTestAndSendResult(updatedUser.id)
    }

    const action = definedService[CONSTANTS.COMMANDS.ASK_NEXT_QUESTION]
    return action(updatedUser.testAnswers.length)
  })
}
