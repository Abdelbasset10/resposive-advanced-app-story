const mongoose = require('mongoose')

const UserModel = mongoose.Schema({
    name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },

})

module.exports = mongoose.model('UserModel',UserModel)