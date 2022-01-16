import { NeuralNetwork } from "../../perceptron/NeuralNetwork.js"
import { initConfigsForMessagesHandler } from "./MessagesHandlerInitConfigs.js"
import { CONSTANTS } from "../../config/constants.js"
import { User } from '../../models/User.js'

export const MessagesHandler = async (bot) => {
  let definedService;
  const neuralNetwork = new NeuralNetwork();
  
  bot.on("message", async (msg) => {
    const dependencies = { bot, msg, neuralNetwork }
    definedService = await initConfigsForMessagesHandler(msg, dependencies)

    const action = definedService[msg.text] || definedService[CONSTANTS.COMMANDS.THROW_FALLBACK_MESSAGE]
    return action()
  })

  bot.on("callback_query", async (callbackQuery) => {
    const msg = callbackQuery.message;
    const userDataToSearch = { firstname: msg.chat.first_name, lastname: msg.chat.last_name, nickname: msg.chat.username }
    const user = await User.findOne(userDataToSearch).exec();

    const question = {
      currentQuestionIndex: user.testAnswers?.length,
      nextQuestionIndex: user.testAnswers?.length + 1,
    }

    const answerId = callbackQuery.data;
    await User.updateOne(userDataToSearch, { $push: { testAnswers: answerId } }).exec();

    console.log(question.currentQuestionIndex, answerId)
    
    
    if (!question.nextQuestionIndex) {
      bot.sendMessage('Тест завершен! Спасибо за участие!')
    }
    
    const action = definedService[CONSTANTS.COMMANDS.ASK_NEXT_QUESTION]
    return action(question.nextQuestionIndex)
  });
}