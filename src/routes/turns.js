const { Router } = require('express')
const router = Router()

const { getTurns, createTurn, getTurn, updateTurn, deleteTurn, reduceRations } = require('../controllers/turns.controller')

router.route('/')
    .get(getTurns)
    .post(createTurn)
router.route('/:id')
    .get(getTurn)
    .put(updateTurn)
    .delete(deleteTurn)
router.route('/reduceRations/:id')
    .put(reduceRations)

module.exports = router