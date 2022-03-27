const app = require('./app')

// Importando conección con la base de datos
require('./database')

function main() {
    app.listen(app.get('port'))
    console.log('Server on port', app.get('port'))
}

main()
