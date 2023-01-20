import { Schema, model } from 'mongoose'

const UserSchemaDB = Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
})

export default model('User', UserSchemaDB)
