import pkg from 'node-emoji';

import { User } from '../../models/User.js'
import { getMenuCommands } from '../../utils/get-menu-commands.js'
import { CONSTANTS } from '../../config/constants.js'

const { emoji } = pkg;

export class CommandService {
  constructor(bot) {
    this.bot = bot
  }

  sayHello = async (msg) => {
    const chatId = msg.chat.id
    
    const user = await User.findOne({ firstname: msg.from.first_name, lastname: msg.from.last_name, nickname: msg.from.username }).exec();
    const isAdmin = (user?.role === "admin")
    const menuCommands = getMenuCommands(isAdmin)
    this.bot.setMyCommands(menuCommands)

    if (!user) {
      await User.create({ firstname: msg.from.first_name, lastname: msg.from.last_name, nickname: msg.from.username, role: 'candidate' })
    }

    await this.bot.sendMessage(chatId, `Привет, ${msg.from.first_name} ${msg.from.last_name}${emoji.v} Я хочу задать тебе несколько вопросов, чтобы определить твой психотип. Давай начнем!`)
    return this.bot.sendMessage(chatId, `Для начала нажми на ${CONSTANTS.COMMON_COMMANDS.runTest}`)
  }

  runTest = async (msg) => { }

  throwFallbackMessage = async (msg) => {
    const chatId = msg.chat.id
    return this.bot.sendMessage(chatId, "Ответ некорректен")
  }
}