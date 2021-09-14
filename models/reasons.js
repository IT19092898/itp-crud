const mongoose = require('mongoose');

const reasontSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },

 
})

module.exports = mongoose.model('reason',reasontSchema)