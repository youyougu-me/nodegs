
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let companySchema = new Schema({
  companyname:{
    type:String,
    required:true,
  }
})
module.exports = mongoose.model('allcompanys',companySchema,'allcompanys')

