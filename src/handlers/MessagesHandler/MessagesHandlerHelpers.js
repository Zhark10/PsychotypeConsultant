import { User } from '../../models/ModelOfUser.js'
import { CONSTANTS } from "../../config/constants.js"
import { getCommonUserInfo } from '../../utils/get-common-user-info.js'

import { CandidateCommandService } from "../../services/command/CandidateCommandService.js"
import { EmployeeCommandService } from "../../services/command/EmployeeCommandService.js"
import { AdminCommandService } from "../../services/command/AdminCommandService.js"
import { CommandService } from "../../services/command/CommandService.js"

export const MessageHandlerHelpers = {
  defineService: async (msg, dependencies) => {
    const user = await User.findOne(getCommonUserInfo(msg)).exec();
    const role = user?.role;
  
    const services = {
      [CONSTANTS.USER_ROLES.ADMIN]: AdminCommandService,
      [CONSTANTS.USER_ROLES.EMPLOYEE]: EmployeeCommandService,
      [CONSTANTS.USER_ROLES.CANDIDATE]: CandidateCommandService
    }
  
    const Service = services[role] || CommandService
    const definedService = new Service(dependencies)
    return definedService
  }
}