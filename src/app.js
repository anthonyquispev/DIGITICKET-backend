const express = require('express')
const cors = require('cors')
const app = express()

// Settings
app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/administrators', require('./routes/administrators'))
app.use('/api/students', require('./routes/students'))
app.use('/api/foods', require('./routes/foods'))
app.use('/api/turns', require('./routes/turns'))
app.use('/api/tickets', require('./routes/tickets'))

module.exports = app