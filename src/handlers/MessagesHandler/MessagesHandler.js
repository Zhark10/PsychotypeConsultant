import { NeuralNetwork } from '../../perceptron/NeuralNetwork.js'
import { initConfigsForMessagesHandler } from './MessagesHandlerInitConfigs.js'
import { CONSTANTS } from "../../config/constants.js"

export const MessagesHandler = async (bot) => {
  let neuralNetwork;

  bot.on("message", async (msg) => {
    neuralNetwork = new NeuralNetwork()
    const dependencies = { bot, msg, neuralNetwork }

    const configs = await initConfigsForMessagesHandler(msg, dependencies)
    const { definedService } = configs

    const action = definedService[msg.text] || service[CONSTANTS.COMMANDS.THROW_FALLBACK_MESSAGE]
    return action()
  })
}