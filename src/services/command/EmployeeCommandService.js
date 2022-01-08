import { CommandService } from "./CommandService.js"

export class EmployeeCommandService extends CommandService {
  askAQuestion = async () => {
    const { user, chatId } = await this.getCommonInfoForActions()
    
  }
}