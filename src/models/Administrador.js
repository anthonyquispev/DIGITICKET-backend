const {Schema, model} = require('mongoose')

const administradorSchema = new Schema({
    username: {
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
    permisos: {
        type: Array,
        required: true
    }
})

module.exports = model('Administradores', administradorSchema);