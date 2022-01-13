import { CommandService } from "./CommandService.js"
import {CONSTANTS} from "../../config/constants.js"

export class CandidateCommandService extends CommandService {
  [CONSTANTS.COMMANDS.ASK_A_QUESTION] = async () => {
    const { user, chatId } = await getCommonInfoForActions(this.msg)
  }
 }