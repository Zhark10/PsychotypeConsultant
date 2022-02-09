import { UserActionHandler } from './src/handlers/UserActionHandler/UserActionHandler.js'
import { createDatabaseConnection } from './src/config/initialization-db.js'
import { bot } from './src/config/initialization-bot.js'

const startBot = async () => {
  await createDatabaseConnection()
  return UserActionHandler(bot)
}

startBot()
