const express = require('express')
const router = express.Router()

const studentController = require('../controllers/StudentController')

router.post('/add', (req, res) => {
    return studentController.student.add(req, res)
})
router.get('/get-by-id', (req, res) => {
    return studentController.student.get_by_id(req, res)
})

router.get('/get-all', (req, res) => {
    return studentController.student.get(req,res)
})

router.post('/update', (req, res) => {
    return studentController.student.update(req,res)
})
router.delete('/delete', (req, res) => {
    return studentController.student.delete(req,res)
})


module.exports = router