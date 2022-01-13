import { CONSTANTS } from "../config/constants.js"

const { COMMANDS } = CONSTANTS

export const getMenuCommands = (isAdmin) => {
  const commonCommands = [
    { command: COMMANDS.SAY_HELLO, description: "Поприветствовать" },
    { command: COMMANDS.ASK_A_QUESTION, description: "Запустить тест" },
  ]

  if (isAdmin) {
    return commonCommands.concat([
      { command: COMMANDS.GET_STATS_BY_CANDIDATES, description: "Вывести статистику" },
    ])
  }

  return commonCommands
}