import mongoose from 'mongoose'

const CONNECTION_URL = 'XXXXXXX' // TODO: завести .env

const createDatabaseConnection = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connection is successful')
  } catch (error) {
    console.error('Connection error', error)
  }
}

export {
  createDatabaseConnection
}