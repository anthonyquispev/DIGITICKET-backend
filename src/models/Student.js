const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const studentSchema = new Schema({
    university_code: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    institutional_mail: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        default: 'https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png'
    },
    logged_in: {
        type: Boolean,
        default: false
    },
    // Personal data for account activation
    personal_mail: {
        type: String,
    },
    personal_phone: {
        type: String,
    },
    preference_campus: {
        type: String
    }
})

studentSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

studentSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password)
}

module.exports = model('Students', studentSchema)