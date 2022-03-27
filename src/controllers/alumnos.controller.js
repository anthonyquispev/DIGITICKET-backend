const alumnoCtrl = {}
const Alumno = require('../models/Alumno')

// Mostrar alumnos
alumnoCtrl.getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find()
        return res.json({
            ok: true,
            alumnos
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

// Registrar alumno
alumnoCtrl.createAlumnos = async (req, res) => {
    const { codigo_universitario, password, apellido_paterno, apellido_materno, nombres, correo_institucional, correo_personal, telefono_personal, sede_preferencia, foto, logged_in } = req.body;
    const newAlumno = new Alumno({
        codigo_universitario, password, apellido_paterno, apellido_materno, nombres, correo_institucional, correo_personal, telefono_personal, sede_preferencia, foto, logged_in
    })
    await newAlumno.save((err, alumnoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            newAlumno: alumnoDB
        })
    })
}

// Obtener alumno
alumnoCtrl.getAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id)
        if (!alumno) {
            return res.json({
                ok: false, message: "Alumno no encontrado"
            })
        }
        res.json({ ok: true, alumno })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

// Login
alumnoCtrl.login = async (req, res) => {
    const { codigo_universitario, password } = req.body;
    Alumno.find({ codigo_universitario: codigo_universitario }, (err, alumnoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        // Validación del código universitario
        if (!alumnoDB[0]) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Código universitario o contraseña incorrectos"
                }
            })
        }
        // Validación de contraseña
        if (password != alumnoDB[0].password) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Código universitario o contraseña incorrectos"
                }
            })
        }
        // Usuario validado
        res.json({
            ok: true,
            alumnoDB
        })
    })
}

// Actualizar alumno
alumnoCtrl.updateAlumno = async (req, res) => {
    try {
        const updatedAlumno = await Alumno.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true
            }
        )
        if (!updatedAlumno) {
            return res.json({ ok: false, message: "Alumno no encontrado" })
        }
        res.json({
            ok: true, updatedAlumno
        })
    } catch (error) {
        return res.json({
            ok: false, message: error.message
        })
    }
}

// Eliminar alumno
alumnoCtrl.deleteAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findByIdAndDelete(req.params.id);
        if (!alumno) {
            return res.json({
                ok: false, message: "Alumno no encontrado"
            })
        }
        res.json({ ok: true, message: "Alumno eliminado" })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error.message })
    }
}

module.exports = alumnoCtrl