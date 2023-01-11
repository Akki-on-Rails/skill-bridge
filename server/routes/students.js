const express = require('express')
const { createStudent, getStudent, getStudents, deleteStudent, updateStudent } = require('../controllers/studentController')
const student = require('../models/studentModel')
const router = express.Router()



//GET all Students 
router.get('/', getStudents) //refers to the workoutController

//GET a signle student
router.get('/:id',  getStudent) //refers to the workoutController
//POST a new student
router.post('/', createStudent) //refers to the workoutController

//Delete a student
router.delete('/:id', deleteStudent)

//UPDATE a student
router.patch('/:id', updateStudent)




module.exports = router