import { User } from '../../../models/User.js'

export const getCommonInfoForActions = async (msg) => {
  const user = await User.findOne(getCommonUserInfo(msg)).exec();
  const chatId = this.msg.chat.id
  return { user, chatId }
}