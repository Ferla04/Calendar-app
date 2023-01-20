import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('DB online')
  } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de inicilizar DB')
  }
}
