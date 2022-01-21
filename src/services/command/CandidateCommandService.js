import { CommandService } from "./CommandService.js"
import { CONSTANTS } from "../../config/constants.js"
import { getCommonInfoForActions } from "./helpers/get-info-for-actions.js"
import { getCommonUserInfo } from '../../utils/get-common-user-info.js'
import { PsychotypeData } from "../../perceptron/NeuralPsychotypeTest.js"
import { User } from "../../models/ModelOfUser.js"

const { test } = PsychotypeData

export class CandidateCommandService extends CommandService {
  [CONSTANTS.COMMANDS.RUN_TEST] = async () => {
    const firstTestItem = test[0]
    const { chatId } = await getCommonInfoForActions(this.msg)
    await User.updateOne(getCommonUserInfo(this.msg), { testAnswers: [] }).exec();
    const picture = await this.templateService.createTemplateForAnswer(firstTestItem.question)
    return this.bot.sendPhoto(chatId, picture, firstTestItem.options)
  }

  [CONSTANTS.COMMANDS.ASK_NEXT_QUESTION] = async (nextQuestionIndex) => {
    const nextQuestion = test[nextQuestionIndex]
    const { chatId } = await getCommonInfoForActions(this.msg)
    const picture = await this.templateService.createTemplateForAnswer(nextQuestion.question)
    return this.bot.sendPhoto(chatId, picture, nextQuestion.options)
  }
 }