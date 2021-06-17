let mongoose = require('mongoose')
let Schema = mongoose.Schema

let systemPersonSchema = new Schema({
  personName: {
    type: String,
    required: true,
  },
  personDepartmentId: {
    type: String,
  },
  personRoleId: {
    type: String
  },
  personCompanyId: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})
module.exports = mongoose.model('systemPerson', systemPersonSchema, 'systemPerson')

