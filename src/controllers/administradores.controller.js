const administradorCtrl = {};
const Administrador = require('../models/Administrador')

// Obtener administradores
administradorCtrl.getAdministradores = async (req, res) => {
    const administradores = await Administrador.find()
    res.json(administradores)
}

// Crear administrador
administradorCtrl.createAdministradores = async (req, res) => {
    const {username, password, apellido_paterno, apellido_materno, nombres, permisos} = req.body;
    const newAdministrador = new Administrador({
        username,
        password,
        apellido_paterno,
        apellido_materno,
        nombres,
        permisos
    })
    await newAdministrador.save((err, adminDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            newAdministrador: adminDB
        })
    })
}

module.exports = administradorCtrl