const express = require('express')
const cors = require('cors')
const userRoutes = require('../routes/user')
console.log(userRoutes);
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = '/api'
        this.userPath = this.path + '/users'

        // Middleware
        this.middlewares()

        // Routes
        this.routes()
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Static
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.userPath, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }
}

module.exports = Server;