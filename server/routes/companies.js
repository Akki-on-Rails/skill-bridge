const express = require('express')
const { createCompany, getCompany, getCompanies, deleteCompany, updateCompany } = require('../controllers/companyController')
const company = require('../models/companyModel')
const router = express.Router()



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