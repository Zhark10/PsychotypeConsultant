import { CandidateCommandService } from "../services/command/CandidateCommandService.js"
import { AdminCommandService } from "../services/command/AdminCommandService.js"
import { CONSTANTS } from "../config/constants.js"
import { getCommonUserInfo } from '../utils/get-common-user-info.js'

const { COMMON_COMMANDS, ADMIN_COMMANDS } = CONSTANTS

export const MessagesHandler = async (bot) => {

  bot.on("message", async (msg) => {
    const user = await User.findOne(getCommonUserInfo(msg)).exec();
    const isAdmin = (user?.role === CONSTANTS.USER_ROLES.ADMIN)
    const commandService = new (isAdmin ? AdminCommandService : CandidateCommandService)(bot, msg)

    const actions = {
      [COMMON_COMMANDS.sayHello]: commandService.sayHello,
      [COMMON_COMMANDS.askAQuestion]: commandService.askAQuestion
    }

    if (isAdmin) {
      actions[ADMIN_COMMANDS.getStatsByCandidates] = commandService.getStatsByCandidates
    }

    const definedAction = actions[msg.text] || commandService.throwFallbackMessage
    return definedAction(msg)
  })
}