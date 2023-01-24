const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validator = require('validator')

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

//static signup method

companySchema.statics.signup = async function (name, industry, location, size,email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not Valid')

    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const company = await this.create({name, industry, location, size, email, password: hash })

    return company
}

// static login method
companySchema.statics.login = async function(email,password){

 // validation
 if (!email || !password) {
    throw Error('All fields must be filled')
}
const company= await this.findOne({ email })

if (!company) {
    throw Error('Incorrect email')
}

const match = await bcrypt.compare(password,company.password)
if(!match){
    throw Error('Incorrect password')
}
return company 
}

module.exports = mongoose.model('Company', companySchema)