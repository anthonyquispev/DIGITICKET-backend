const { Schema, model } = require('mongoose')

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    service_type: {
        type: Array,
        required: true
    },
    nutritional_info: {
        type: Object,
        required: true
    }
})

module.exports = model('Foods', foodSchema);