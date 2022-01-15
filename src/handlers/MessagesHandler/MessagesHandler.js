import { NeuralNetwork } from '../../perceptron/NeuralNetwork.js'
import { initConfigsForMessagesHandler } from './MessagesHandlerInitConfigs.js'
import { CONSTANTS } from "../../config/constants.js"

const optionAdapter = (question) => {
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'Some button text 1', callback_data: '1' }],
        [{ text: 'Some button text 2', callback_data: '2' }],
        [{ text: 'Some button text 3', callback_data: '3' }]
      ]
    })
  }
};

export const MessagesHandler = async (bot) => {
  bot.on("message", async (msg) => {
    const neuralNetwork = new NeuralNetwork()
    const dependencies = { bot, msg, neuralNetwork }

    const configs = await initConfigsForMessagesHandler(msg, dependencies)
    const { definedService } = configs

    const action = definedService[msg.text] || service[CONSTANTS.COMMANDS.THROW_FALLBACK_MESSAGE]
    return action()
  })
}