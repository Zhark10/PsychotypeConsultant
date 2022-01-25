import { CandidateCommandService } from "./CandidateCommandService.js"
import { User } from '../../models/ModelOfUser.js'
import { CONSTANTS } from "../../config/constants.js"
import { getCommonInfoForActions } from './helpers/get-info-for-actions.js'

export class AdminCommandService extends CandidateCommandService {
  [CONSTANTS.COMMANDS.GET_STATS_BY_CANDIDATES] = async () => {
    const { chatId } = await getCommonInfoForActions(this.msg)
    const allUsers = await User.find({}).exec()

    const stats = allUsers.map((user, index) => {
      const candidatePercentageResult = user.testResult ? `${100 * user.testResult.toFixed(2)}%` : "-"
      return `${index + 1}. ${user.firstname} ${user.lastname} - ${candidatePercentageResult}`
    })

    const picture = await this.templateService.createTemplateForStats(stats)
    await this.bot.sendPhoto(chatId, picture)
  }
}