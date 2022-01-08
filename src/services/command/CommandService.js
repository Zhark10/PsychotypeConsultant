import pkg from 'node-emoji';

import { User } from '../../models/User.js'
import { getMenuCommands } from '../../utils/get-menu-commands.js'
import { getCommonUserInfo } from '../../utils/get-common-user-info.js'

import { CONSTANTS } from '../../config/constants.js'

const { emoji } = pkg;

export class CommandService {
  constructor(bot, msg) {
    this.bot = bot
    this.msg = msg
  }

  getCommonInfoForActions = async () => {
    const user = await User.findOne(getCommonUserInfo(this.msg)).exec();
    const chatId = this.msg.chat.id
    return { user, chatId }
  }

  sayHello = async () => {
    const { user, chatId } = await getCommonInfoForActions()
    const isAdmin = (user?.role === CONSTANTS.USER_ROLES.ADMIN)
    const menuCommands = getMenuCommands(isAdmin)
    this.bot.setMyCommands(menuCommands)

    if (!user) {
      await User.create({...getCommonUserInfo(this.msg), role: CONSTANTS.USER_ROLES.CANDIDATE })
    }

    await this.bot.sendMessage(chatId, `Привет, ${this.msg.from.first_name} ${this.msg.from.last_name}${emoji.v} Я хочу задать тебе несколько вопросов, чтобы определить твой психотип. Давай начнем!`)
    return this.bot.sendMessage(chatId, `Для начала нажми на ${CONSTANTS.COMMON_COMMANDS.runTest}`)
  }

  askAQuestion = async () => {
    const { user, chatId } = await getCommonInfoForActions()

  }

  throwFallbackMessage = async () => {
    const { user, chatId } = await getCommonInfoForActions()
    if (user?.prevQuestionId === 36) return this.bot.sendMessage(chatId, "Спасибо за прохождение теста!")
    return this.bot.sendMessage(chatId, "Ответ некорректен")
  }
}