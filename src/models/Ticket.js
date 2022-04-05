const { Schema, model } = require('mongoose')

const ticketSchema = new Schema({
    student_id: {
        type: String,
        required: true
    },
    turn_id: {
        type: String,
        required: true
    },
    ticket_number: {
        type: String,
        required: true
    },
    foods: {
        type: Object,
        required: true
    },
    campus: {
        type: String,
        required: true
    },          
    level: {
        type: String,
        required: true
    }
})

module.exports = model('Tickets', ticketSchema);