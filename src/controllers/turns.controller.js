const turnCtrl = {}
const Turn = require('../models/Turn')

turnCtrl.getTurns = async (req, res) => {
    try {
        const turns = await Turn.find()
        return res.json({
            ok: true,
            turns
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

turnCtrl.createTurn = async (req, res) => {
    const { schedule, rations_available, entree_rations, second_rations, dessert_rations, drink_rations } = req.body;
    const newTurn = new Turn({
        schedule, rations_available, entree_rations, second_rations, dessert_rations, drink_rations
    })
    await newTurn.save((err, turnDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            newTurn: turnDB
        })
    })
}

turnCtrl.getTurn = async (req, res) => {
    try {
        const turn = await Turn.findById(req.params.id)
        if (!turn) {
            return res.json({
                ok: false, message: "Turn not found"
            })
        }
        res.json({ ok: true, turn })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

turnCtrl.updateTurn = async (req, res) => {
    try {
        const updatedTurn = await Turn.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true
            }
        )
        if (!updatedTurn) {
            return res.json({ ok: false, message: "Turn not found" })
        }
        res.json({
            ok: true, updatedTurn
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

turnCtrl.deleteTurn = async (req, res) => {
    try {
        const turn = await Turn.findByIdAndDelete(req.params.id);
        if (!turn) {
            return res.json({
                ok: false, message: "Turn not found"
            })
        }
        res.json({ ok: true, message: "Deleted turn" })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

turnCtrl.reduceRations = async (req, res) => {
    try {
        const turn = await Turn.findById(req.params.id);
        if (!turn) {
            return res.json({
                ok: false, message: "Turn not found"
            })
        }
        var { rations_available, entree_rations, second_rations, dessert_rations, drink_rations } = turn;
        const { entree, second, dessert, drink } = req.body;
        rations_available = (parseInt(rations_available) - 1).toString();
        if (entree) entree_rations = (parseInt(entree_rations) - 1).toString()
        if (second) second_rations = (parseInt(second_rations) - 1).toString()
        if (dessert) dessert_rations = (parseInt(dessert_rations) - 1).toString()
        if (drink) drink_rations = (parseInt(drink_rations) - 1).toString()
        const updatedTurn = await Turn.findByIdAndUpdate(req.params.id, {
            rations_available, entree_rations, second_rations, dessert_rations, drink_rations
        }, {
            new: true
        })
        res.json({
            ok: true, updatedTurn
        })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

module.exports = turnCtrl