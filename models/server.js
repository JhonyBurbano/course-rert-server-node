const express = require('express')
const cors = require('cors')
const userRoutes = require('../routes/user');
const { dbConection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = '/api'
        this.userPath = this.path + '/users'
            // Conectar a la base de datos
        this.dbConectar()
            // Middleware
        this.middlewares()

        // Routes
        this.routes()
    }

    async dbConectar() {
        await dbConection();
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // read and parse data body
        this.app.use(express.json())

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