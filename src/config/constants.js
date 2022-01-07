import dotenv from 'dotenv'
import path from 'path';
const __dirname = path.resolve();

if (process.env.NODE_ENV) {
  dotenv.config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`
  })
} else {
  dotenv.config()
}

const TOKENS = {
  mongodb: process.env.MONGO_DB_CONNECTION_URL,
  tgbot: process.env.TELEGRAM_BOT
}

const SEPARATOR_TO_CREATE_UNIQUE_COMMAND = "__"

const COMMON_COMMANDS = {
  sayHello: "/start",
  runTest: "/run_test",
}

const ADMIN_COMMANDS = {
  getStatsByCandidates: "/stats_by_candidates",
}

export const CONSTANTS = {
  SEPARATOR_TO_CREATE_UNIQUE_COMMAND,
  COMMON_COMMANDS,
  ADMIN_COMMANDS,
  TOKENS
}