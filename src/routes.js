const { Router } = require('express');
const UploadController = require('./controllers/v1/upload/UploadController');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = Router();

routes.get('/upload', UploadController.index);
routes.post('/upload', multer(multerConfig).single('pictures'), UploadController.save);

module.exports = routes;
