const { Router } = require('express')
const router = Router()

const { getTickets, createTicket, getTicket, updateTicket, deleteTicket } = require('../controllers/tickets.controller')

router.route('/')
    .get(getTickets)
    .post(createTicket)

router.route('/:id')
    .get(getTicket)
    .put(updateTicket)
    .delete(deleteTicket)

module.exports = router