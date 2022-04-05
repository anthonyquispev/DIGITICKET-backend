const administratorCtrl = {};
const Administrator = require('../models/Administrator')

administratorCtrl.getAdministrators = async (req, res) => {
    const administrators = await Administrator.find()
    res.json(administrators)
}

administratorCtrl.createAdministrator = async (req, res) => {
    const {username, password, last_name, first_name, permissions} = req.body;
    const newAdministrator = new Administrator({
        username, password, last_name, first_name, permissions
    })
    await newAdministrator.save((err, administratorDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            newAdministrator: administratorDB
        })
    })
}

module.exports = administratorCtrl