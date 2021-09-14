const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    storeStatus:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    adStatus:{
        type:String,
        required:true
    },
    SP_ID:{
        type:String,
        required:true
    },
    storeId:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },


})

module.exports = mongoose.model('post',postSchema)