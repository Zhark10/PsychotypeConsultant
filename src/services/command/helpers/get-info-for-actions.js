import { User } from '../../../models/ModelOfUser.js'
import { getCommonUserInfoByMsg } from '../../../utils/get-common-user-info.js'

export const getCommonInfoForActions = async (msg) => {
  const user = await User.findOne(getCommonUserInfoByMsg(msg)).exec();
  const chatId = msg.chat.id
  return { user, chatId }
}