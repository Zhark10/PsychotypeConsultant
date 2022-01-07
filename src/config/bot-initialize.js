import TelegramApi from "node-telegram-bot-api";

const token = "XXXXXX" // TODO: завести .env
export const bot = new TelegramApi(token, { polling: true })