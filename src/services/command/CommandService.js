import pkg from 'node-emoji';

import { User } from '../../models/ModelOfUser.js'
import { getMenuCommands } from '../../utils/get-menu-commands.js'
import { getCommonUserInfo } from '../../utils/get-common-user-info.js'
import { getCommonInfoForActions } from './helpers/get-info-for-actions.js'

import { CONSTANTS } from '../../config/constants.js'

const { emoji } = pkg;

export class CommandService {
  constructor(opts) {
    this.bot = opts.bot
    this.msg = opts.msg
    this.neuralNetwork = opts.neuralNetwork
    this.templateService = opts.templateService
  }

  [CONSTANTS.COMMANDS.SAY_HELLO] = async () => {
    const { user, chatId } = await getCommonInfoForActions(this.msg)
    const isAdmin = (user?.role === CONSTANTS.USER_ROLES.ADMIN)
    const menuCommands = getMenuCommands(isAdmin)
    this.bot.setMyCommands(menuCommands)

    if (isAdmin) {
      const picture = await this.templateService.createTemplateForSimpleMessage(
        `Привет, ${this.msg.from.first_name} ${this.msg.from.last_name}${emoji.v}! Ты администратор!`
      )
      await this.bot.sendPhoto(chatId, picture)
      return this.bot.sendMessage(chatId, `Чтобы узнать статистику по кандидатам, нажми на ${CONSTANTS.COMMANDS.GET_STATS_BY_CANDIDATES}`)
    }

    if (!user) {
      await User.create({ ...getCommonUserInfo(this.msg), role: CONSTANTS.USER_ROLES.CANDIDATE })
    }

    const picture = await this.templateService.createTemplateForSimpleMessage(
      `Привет, ${this.msg.from.first_name} ${this.msg.from.last_name}${emoji.v} Я хочу задать тебе несколько вопросов, чтобы определить твой психотип. Давай начнем!`
    )
    await this.bot.sendPhoto(chatId, picture)
    return this.bot.sendMessage(chatId, `Для начала нажми на ${CONSTANTS.COMMANDS.RUN_TEST}`)
  }

  [CONSTANTS.COMMANDS.THROW_FALLBACK_MESSAGE] = async () => {
    return this.bot.sendMessage(chatId, "Ответ некорректен")
  }
}