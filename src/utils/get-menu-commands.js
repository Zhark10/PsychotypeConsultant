import { CONSTANTS } from "../config/constants.js"

const { COMMON_COMMANDS, ADMIN_COMMANDS } = CONSTANTS

export const getMenuCommands = (isAdmin) => {
  const commonCommands = [
    { command: COMMON_COMMANDS.sayHello, description: "Поприветствовать" },
    { command: COMMON_COMMANDS.runTest, description: "Запустить тест" },
  ]

  if (isAdmin) {
    return commonCommands.concat([
      { command: ADMIN_COMMANDS.getStatsByCandidates, description: "Вывести статистику" },
    ])
  }

  return commonCommands
}