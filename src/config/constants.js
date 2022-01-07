import dotenv from 'dotenv'
dotenv.config()

const APIS = {
  mongodb: process.env.MONGO_DB_CONNECTION_URL,
  tgbot: process.env.TELEGRAM_BOT
}

const SEPARATOR_TO_CREATE_UNIQUE_COMMAND = "__"

const COMMON_COMMANDS = {
  sayHello: "/start",
  runTest: "/runTest",
}

const ADMIN_COMMANDS = {
  getStatsByCandidates: "/statsByCandidates",
}

export const CONSTANTS = {
  SEPARATOR_TO_CREATE_UNIQUE_COMMAND,
  COMMON_COMMANDS,
  ADMIN_COMMANDS,
  APIS
}