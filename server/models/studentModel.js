const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validator = require('validator')

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
        unique: true,

    },
    password: {
        type: String,
        required: true

    }
}, { timestamps: true })

//static signup method

studentSchema.statics.signup = async function (fName, age, location, sStatus,email, password) {

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
    const student = await this.create({fName, age, location, sStatus, email, password: hash })

    return student
}

// static login method
studentSchema.statics.login = async function (email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    const student = await this.findOne({ email })

    if (!student) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, student.password)
    if (!match) {
        throw Error('Incorrect password')
    }
    return student
}

module.exports = mongoose.model('Student', studentSchema)