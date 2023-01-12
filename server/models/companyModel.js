
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const companySchema = new Schema({

    name: {
        type: String,
        required: true

    },
    industry: {
        type: String,
        required: true

    },
    location: {
        type: String,

    },
    size: {
        type: Number,
     

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

module.exports = mongoose.model('Company', companySchema)