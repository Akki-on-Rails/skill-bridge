const express = require('express')
const { createCompany, getCompany, getCompanies, deleteCompany, updateCompany } = require('../controllers/companyController') 
const company = require('../models/companyModel')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

//controller functions
const { signupCompany, loginCompany } = require('../controllers/companyController')

//login route
router.post('/logincompany', loginCompany)

//singup route
router.post('/signupcompany', signupCompany)


//using the middleware to protect all workout routes below
router.use(requireAuth)


//GET all Companies 
router.get('/', getCompanies) //refers to the workoutController

//GET a signle company
router.get('/:id', getCompany) //refers to the workoutController
//POST a new company
router.post('/', createCompany) //refers to the workoutController

//Delete a company
router.delete('/:id', deleteCompany)

//UPDATE a company
router.patch('/:id', updateCompany)





module.exports = router