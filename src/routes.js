const { Router } = require('express');
const UploadController = require('./controllers/v1/upload/UploadController');
const { multerUploads } = require('./config/multer');

const routes = Router();

routes.get('/upload', UploadController.index);
routes.post('/upload', multerUploads , UploadController.save);

module.exports = routes;
