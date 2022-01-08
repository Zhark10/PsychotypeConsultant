export const getCommonUserInfo = (msg) => {
  return { firstname: msg.from.first_name, lastname: msg.from.last_name, nickname: msg.from.username }
}