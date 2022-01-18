import { CommandService } from "./CommandService.js"

export class EmployeeCommandService extends CommandService {
  [CONSTANTS.COMMANDS.RUN_TEST] = async () => {
    const { test } = PsychotypeData
    const firstTestItem = test[0]
    const { chatId } = await getCommonInfoForActions(this.msg)
    await User.updateOne(getCommonUserInfo(this.msg), { testAnswers: [] }).exec();
    return this.bot.sendMessage(chatId, firstTestItem.question, firstTestItem.options)
  }
}