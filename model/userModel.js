let mongoose = require('mongoose')
let Schema = mongoose.Schema
let userSchema = new Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  username:{
    type:String,
    required:true,
  },
  companyname:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now()
  }
})
module.exports = mongoose.model('users',userSchema,'users')

