const mongoose = require('mongoose')

const SchemaTodo = new mongoose.Schema({
    todo1 : {
        type: String,
        required: true,
    },
    todo2 : {
        type: String,
        required: true,
    }
})

module.exports= new mongoose.model("todo",SchemaTodo)