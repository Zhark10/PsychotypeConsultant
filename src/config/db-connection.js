import mongoose from 'mongoose'

import { CONSTANTS } from "../config/constants.js"

const createDatabaseConnection = async () => {
  try {
    await mongoose.connect(CONSTANTS.APIS.mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connection is successful')
  } catch (error) {
    console.error('Connection error', error)
  }
}

export {
  createDatabaseConnection
}