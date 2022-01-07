import TelegramApi from "node-telegram-bot-api";

import { CONSTANTS } from "../config/constants.js"

export const bot = new TelegramApi(CONSTANTS.TOKENS.tgbot, { polling: true })