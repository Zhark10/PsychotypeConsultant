export const getCommonUserInfoByMsg = (msg) => {
  const isRegularMessage = Boolean(msg.from?.first_name)
  const isCallbackQuery = Boolean(msg.chat?.first_name)
  if (isCallbackQuery) {
    return { firstname: msg.chat.first_name, lastname: msg.chat.last_name, nickname: msg.chat.username }
  } else if (isRegularMessage) {
    return { firstname: msg.from.first_name, lastname: msg.from.last_name, nickname: msg.from.username }
  }
  return {}
}