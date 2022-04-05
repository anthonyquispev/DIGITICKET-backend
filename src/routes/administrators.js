const {Router} = require('express')
const router = Router()

const {getAdministrators, createAdministrator} = require('../controllers/administrators.controller')

router.route('/')
    .get(getAdministrators)
    .post(createAdministrator)

module.exports = router
