const {Router} = require('express')
const { route } = require('express/lib/router')
const router = Router()

const {getStudents, createStudent, getStudent, validateActivation, login, updateStudent, deleteStudent} = require('../controllers/students.controller')

router.route('/')
    .get(getStudents)
    .post(createStudent)

router.route('/:id')
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent)

router.route('/validateActivation/:id')
    .get(validateActivation)

router.route('/login')
    .post(login)

module.exports = router