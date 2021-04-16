const mongoose = require('mongoose')


const accomSchema = new mongoose.Schema({
    owner_name:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Accoms", accomSchema)