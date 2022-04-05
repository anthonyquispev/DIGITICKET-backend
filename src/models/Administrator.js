const {Schema, model} = require('mongoose')

const administratorSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    last_name: {
        type:String,
        required: true
    },
    first_name: {
        type:String,
        required: true
    },
    permissions: {
        type: Array,
        required: true
    }
})

module.exports = model('Administrators', administratorSchema);