const {Router} = require('express')
const router = Router()

const {getAdministradores, createAdministradores} = require('../controllers/administradores.controller')

router.route('/')
    .get(getAdministradores)
    .post(createAdministradores)

module.exports = router
