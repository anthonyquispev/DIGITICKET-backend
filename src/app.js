const express = require('express')
const cors = require('cors')
const app = express()

// Configuraciones
app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(express.json())

// Rutas
app.use('/api/administradores', require('./routes/administradores'))
app.use('/api/alumnos', require('./routes/alumnos'))
app.use('/api/foods', require('./routes/foods'))

module.exports = app