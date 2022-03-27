const {Router} = require('express')
const router = Router()

const {getAlumnos, createAlumnos, getAlumno, login, updateAlumno, deleteAlumno} = require('../controllers/alumnos.controller')

router.route('/')
    .get(getAlumnos)
    .post(createAlumnos)    
router.route('/:id')
    .get(getAlumno)
    .put(updateAlumno)
    .delete(deleteAlumno)
router.route('/login')
    .post(login)

module.exports = router