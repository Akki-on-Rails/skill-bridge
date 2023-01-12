
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    fName: {
        type: String,
        required: true

    },
    age: {
        type: Number,
        required: true

    },
    location: {
        type: String,

    },
    sStatus: {
        type: String,

    },

    email: {
        type: String,
        required: true,
        unique : true,

    },
    password: {
        type: String,
        required: true

    }
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)