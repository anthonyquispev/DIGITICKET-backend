const foodCtrl = {}
const Food = require('../models/Food')

foodCtrl.getFoods = async (req, res) => {
    try {
        const foods = await Food.find()
        return res.json({
            ok: true,
            foods
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

foodCtrl.createFood = async (req, res) => {
    const { name, category, service_type, nutritional_info } = req.body;
    const newFood = new Food({
        name, category, service_type, nutritional_info
    })
    await newFood.save((err, foodDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            newFood: foodDB
        })
    })
}

foodCtrl.getFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id)
        if (!food) {
            return res.json({
                ok: false, message: "Food not found"
            })
        }
        res.json({ ok: true, food })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

foodCtrl.updateFood = async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true
            }
        )
        if (!updatedFood) {
            return res.json({ ok: false, message: "Food not found" })
        }
        res.json({
            ok: true, updatedFood
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

foodCtrl.deleteFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) {
            return res.json({
                ok: false, message: "Food not found"
            })
        }
        res.json({ ok: true, message: "Deleted food" })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

module.exports = foodCtrl