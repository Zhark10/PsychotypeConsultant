import { CommandService } from "./CommandService.js"
import { User } from '../../models/User.js'

export class AdminCommandService extends CommandService {
  getStatsByCandidates = async () => { 
    const allUsers = await User.find({}).exec()

    console.log('allUsers', allUsers)
  }
}