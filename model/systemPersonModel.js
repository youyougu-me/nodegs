let mongoose = require('mongoose')
let Schema = mongoose.Schema

let systemPersonSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  personName: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  personDepartmentId: {
    type: String,
  },
  personRoleId: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
})
module.exports = mongoose.model('systemPerson', systemPersonSchema, 'systemPerson')

