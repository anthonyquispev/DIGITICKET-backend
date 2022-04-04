const {Router} = require('express')
const router = Router()

const {getTurns, createTurn, getTurn, updateTurn, deleteTurn} = require('../controllers/turns.controller')

router.route('/')
    .get(getTurns)
    .post(createTurn)
router.route('/:id')
    .get(getTurn)
    .put(updateTurn)
    .delete(deleteTurn)

module.exports = router