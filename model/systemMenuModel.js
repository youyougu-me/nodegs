let mongoose = require('mongoose')
let Schema = mongoose.Schema

let systemMenuSchema = new Schema({
  menuTitle: {
    type: String,
    required: true,
  },
  itemComponent: {
    type: String,
    required: true,
  },
  selectedIcon: {
    type: String,
    required: true,
  },
  menuPath: {
    type: String,
    required: true,
  },
  menuParentId: {
    type: String,
    required: true,
  },
  isBread: {
    type: String,
    required: true,
  },
  permissions: {
    type: Array,
    required: true,
  }

})
module.exports = mongoose.model('systemMenu', systemMenuSchema, 'systemMenu')

