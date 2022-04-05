const ticketCtrl = {}
const Ticket = require('../models/Ticket')

ticketCtrl.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find()
        return res.json({
            ok: true,
            tickets
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

ticketCtrl.createTicket = async (req, res) => {
    const { student_id, turn_id, ticket_number, foods, campus, level } = req.body;
    const newTicket = new Ticket({
        student_id, turn_id, ticket_number, foods, campus, level
    })
    await newTicket.save((err, ticketDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            newTicket: ticketDB
        })
    })
}

ticketCtrl.getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id)
        if (!ticket) {
            return res.json({
                ok: false, message: "Ticket not found"
            })
        }
        res.json({ ok: true, ticket })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

ticketCtrl.updateTicket = async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true
            }
        )
        if (!updatedTicket) {
            return res.json({ ok: false, message: "Ticket not found" })
        }
        res.json({
            ok: true, updatedTicket
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.json({
                ok: false, message: "Ticket not found"
            })
        }
        res.json({ ok: true, message: "Deleted ticket" })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

module.exports = ticketCtrl