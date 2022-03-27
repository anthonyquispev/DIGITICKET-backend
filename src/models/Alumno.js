const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

const alumnoSchema = new Schema({
    codigo_universitario: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    apellido_paterno: {
        type:String,
        required: true
    },
    apellido_materno: {
        type:String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    correo_institucional: {
        type: String,
        required: true,
        unique: true
    },
    foto: {
        type: String,
        default: 'https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png'
    },
    logged_in: {
        type: Boolean,
        default: false
    },
    // Datos personales para activación de la cuenta
    correo_personal: {
        type: String,
    },
    telefono_personal: {
        type: String,
    },
    sede_preferencia: {
        type: String
    }
})

alumnoSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

alumnoSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password)
}

module.exports = model('Alumnos', alumnoSchema)