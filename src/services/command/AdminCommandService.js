import { CandidateCommandService } from "./CandidateCommandService.js"
import { User } from '../../models/ModelOfUser.js'
import { CONSTANTS } from "../../config/constants.js"
import { getCommonInfoForActions } from './helpers/get-info-for-actions.js'
import { getValidString } from '../../utils/get-valid-string.js'

export class AdminCommandService extends CandidateCommandService {
  [CONSTANTS.COMMANDS.GET_STATS_BY_CANDIDATES] = async () => {
    const { chatId } = await getCommonInfoForActions(this.msg)
    const allUsers = await User.find({}).exec()
    allUsers.forEach(user => {
      this.bot.sendMessage(chatId, `Имя: ${user.firstname} ${user.lastname}, Результат: ${getValidString(user.testResult)}`)
    })
  }
}