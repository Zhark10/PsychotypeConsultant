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
  MONGO_DB: process.env.MONGO_DB_CONNECTION_URL,
  TELEGRAM_BOT: process.env.TELEGRAM_BOT
}

const SEPARATOR_TO_CREATE_UNIQUE_COMMAND = "__"

const COMMANDS = {
  SAY_HELLO: "/start",
  RUN_TEST: "/run_test",
  ASK_NEXT_QUESTION: "/ask_next_question",
  GET_STATS_BY_CANDIDATES: "/stats_by_candidates",
  THROW_FALLBACK_MESSAGE: "throw_fallback_message"
}

const USER_ROLES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
  CANDIDATE: "candidate"
}

export const CONSTANTS = {
  SEPARATOR_TO_CREATE_UNIQUE_COMMAND,
  COMMANDS,
  TOKENS,
  USER_ROLES,
}