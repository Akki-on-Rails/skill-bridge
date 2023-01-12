const { default: mongoose } = require("mongoose");
const Company = require('../models/companyModel')

// get all companies
const getCompanies = async (req, res) => {

    const companies = await Company.find({}).sort({ createdAt: -1 })

    res.status(200).json(companies)
}

//get a single company
const getCompany = async (req, res) => {
    const { id } = req.params

    // handeling the error of not valid id 
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'No such company' })
    }
    const company = await Company.findById(id)

    if (!company) {
        return res.status(404).json({ error: "No such company" })
    }
    res.status(200).json(company)
}


// create a new company
const createCompany = async (req, res) => {

    // add doc to db
    const { name, industry, location, size, email, password } = req.body;
    try {
        const company = await Company.create({ name, industry, location, size, email, password })
        res.status(200).json(company)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a company

const deleteCompany = async (req, res) => {

    const { id } = req.params

    // handeling the error of not valid id 
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'No such company' })
    }
    const company = await Company.findOneAndDelete({ _id: id })

    if (!company) {
        return res.status(404).json({ error: "No such company" })
    }
    res.status(200).json(company)

}
// update a company
const updateCompany = async (req, res) => {

    const { id } = req.params

    // handeling the error of not valid id 
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'No such company' })
    }
    const company = await Company.findOneAndUpdate({ _id: id }, {
        ...req.body  /// ... means to spread whatever properties are on the body, we'd output those in this update

    })

    if (!company) {
        return res.status(404).json({ error: "No such company" })
    }
    res.status(200).json(company)

}


module.exports = { getCompanies, getCompany, createCompany, deleteCompany, updateCompany }