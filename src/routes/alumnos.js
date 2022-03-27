const {Router} = require('express')
const router = Router()

const {getAlumnos, createAlumnos, getAlumno, login, changePasswordAlumno, updateAlumno,activateAccount, deleteAlumno} = require('../controllers/alumnos.controller')

router.route('/')
    .get(getAlumnos)
    .post(createAlumnos)    
router.route('/:id')
    .get(getAlumno)
    .put(updateAlumno)
    .delete(deleteAlumno)
router.route('/login')
    .post(login)
router.route('/changePassword/:id')
    .put(changePasswordAlumno)
router.route('/activateAccount/:id')
    .put(activateAccount)

module.exports = router