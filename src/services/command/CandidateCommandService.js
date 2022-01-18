import { CommandService } from "./CommandService.js"
import { CONSTANTS } from "../../config/constants.js"
import { getCommonInfoForActions } from "./helpers/get-info-for-actions.js"
import { getCommonUserInfo } from '../../utils/get-common-user-info.js'
import { PsychotypeData } from "../../perceptron/NeuralPsychotypeTest.js"
import { User } from "../../models/ModelOfUser.js"

export class CandidateCommandService extends CommandService {
  [CONSTANTS.COMMANDS.RUN_TEST] = async () => {
    const { test } = PsychotypeData
    const firstTestItem = test[0]
    const { chatId } = await getCommonInfoForActions(this.msg)
    await User.updateOne(getCommonUserInfo(this.msg), { testAnswers: [] }).exec();
    return this.bot.sendMessage(chatId, firstTestItem.question, firstTestItem.options)
  }

  [CONSTANTS.COMMANDS.ASK_NEXT_QUESTION] = async (nextQuestionIndex) => {
    const { test } = PsychotypeData
    const nextQuestion = test[nextQuestionIndex]
    const { chatId } = await getCommonInfoForActions(this.msg)
    return this.bot.sendMessage(chatId, nextQuestion.question, nextQuestion.options)
  }
 }