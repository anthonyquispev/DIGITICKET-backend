const {Router} = require('express')
const router = Router()

const {getStudents, createStudent, getStudent, login, updateStudent, deleteStudent} = require('../controllers/students.controller')

router.route('/')
    .get(getStudents)
    .post(createStudent)

router.route('/:id')
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent)
    
router.route('/login')
    .post(login)

module.exports = router