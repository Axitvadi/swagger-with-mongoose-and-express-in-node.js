const express = require('express')
const router = express.Router()

const student = require('./student')

router.use('/student', student)
module.exports = router