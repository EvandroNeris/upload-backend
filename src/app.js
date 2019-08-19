const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { cloudinaryConfig } = require('./config/cloudinary');

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(cors());
        this.express.use('*', cloudinaryConfig)
    }

    routes() {
        this.express.use(routes);
    }
}

module.exports = new AppController().express;