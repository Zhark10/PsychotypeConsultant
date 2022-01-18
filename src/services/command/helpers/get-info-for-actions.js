import { User } from '../../../models/ModelOfUser.js'
import { getCommonUserInfo } from '../../../utils/get-common-user-info.js'

export const getCommonInfoForActions = async (msg) => {
  const user = await User.findOne(getCommonUserInfo(msg)).exec();
  const chatId = msg.chat.id
  return { user, chatId }
}