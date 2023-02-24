const { default: mongoose } = require("mongoose")

const Student = require('../models/studentModel')
const jwt = require('jsonwebtoken')

// get all students
const getStudents = async (req, res) => {

    const students = await Student.find({}).sort({ createdAt: -1 }) // if we want specific ones we use student_ids

    res.status(200).json(students)
}

//get a single student
const getStudent = async (req, res) => {
    const { id } = req.params

    // handeling the error of not valid id 
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'No such student' })
    }
    const student = await Student.findById(id).select('-password')

    if (!student) {
        return res.status(404).json({ error: "No such student" })
    }
    res.status(200).json(student)
}


// create a new student
const createStudent = async (req, res) => {

    // add doc to db
    const { fName, age, location, sStatus, email, password } = req.body;
    //handeling errors 
    //still empty


    try {
        const student_id = req.student._id


        const student = await Student.create({ fName, age, location, sStatus, email, password, student_id })

        // create a token 
        const token = createToken(student._id)

        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a student

const deleteStudent = async (req, res) => {

    const { id } = req.params

    // handeling the error of not valid id 
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'No such student' })
    }
    const student = await Student.findOneAndDelete({ _id: id })

    if (!student) {
        return res.status(404).json({ error: "No such student" })
    }
    res.status(200).json(student)

}
// update a student
const updateStudent = async (req, res) => {

    const { id } = req.params

    // handeling the error of not valid id 
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'No such student' })
    }
    const student = await Student.findOneAndUpdate({ _id: id }, {
        ...req.body  /// ... means to spread whatever properties are on the body, we'd output those in this update

    })

    if (!student) {
        return res.status(404).json({ error: "No such student" })
    }
    res.status(200).json(student)

}

//generating token function
const createToken = (_id) => {

    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })


}
//login student
const loginStudent = async (req, res) => {
    const { email, password} = req.body

    try {
        const student = await Student.login(email, password)

        // create a token 
        const token = createToken(student._id)
        const id = student._id
        res.status(200).json({ email, token,id})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }


}


//signup student

const signupStudent = async (req, res) => {

    const { name, age, location, phone, email, password } = req.body
    try {
        const student = await Student.signup(name, age, location, phone, email, password)

        // create a token 
        const token = createToken(student._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports={ getStudents, getStudent, createStudent, deleteStudent, updateStudent, signupStudent, loginStudent }