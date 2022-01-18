
import { MessagesHandler } from "./src/handlers/MessagesHandler/MessagesHandler.js"
import { createDatabaseConnection } from "./src/config/initialization-db.js"
import { bot } from "./src/config/initialization-bot.js"

const startBot = async () => {
  await createDatabaseConnection()
  return MessagesHandler(bot)
}

startBot()