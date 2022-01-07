import { CandidateCommandService } from "../services/command/CandidateCommandService.js"
import { AdminCommandService } from "../services/command/AdminCommandService.js"
import { CONSTANTS } from "../config/constants.js"

const { COMMON_COMMANDS, ADMIN_COMMANDS } = CONSTANTS

export const MessagesHandler = async (bot) => {

  bot.on("message", async (msg) => {
    const isAdmin = true // TODO: Добавить определение по текущему айдишнику юзера в базе, какая у него роль
    const commandService = new (isAdmin ? AdminCommandService : CandidateCommandService)(bot)

    const actions = {
      [COMMON_COMMANDS.sayHello]: commandService.sayHello,
      [COMMON_COMMANDS.runTest]: commandService.runTest
    }

    if (isAdmin) {
      actions[ADMIN_COMMANDS.getStatsByCandidates] = commandService.getStatsByCandidates
    }

    const definedAction = actions[msg.text] || commandService.throwFallbackMessage
    return definedAction(msg)
  })
}