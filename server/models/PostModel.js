const mongoose = require('mongoose')

const PostModel = mongoose.Schema({
    creator:String,
    title:String,
    name:String,
    message:String,
    tags:[String],
    selectedFile : String,
    likeCount:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
})

module.exports = mongoose.model('PostModel',PostModel)