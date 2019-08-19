const { Upload } = require('../../../models');
const  { dataUri } = require('../../../config/multer');
const { uploader } = require('../../../config/cloudinary');

module.exports = {
    async index(req, res) {
        try {
            const res = await Upload.findAll();
            res.status(200).json(res);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    async save(req, res, next) {
        try {
            const file = dataUri(req).content;
            return uploader.upload(file).then(async(result) => {
                const image = result.url;
                const data = {
                    name: req.file.originalname,
                    image: image,
                    cloudinar_id: image,
                }
                const response = await Upload.create(data);
                res.status(200).json(response); 
            });
        } catch (err) {
            res.status(400).json(err);
        }
    },

    async update(req, res) {
        try {
            const res = await Upload.update(req.body, { where: { id: req.body.id }});

            res.status(200).json(res);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    async destroy(req, res) {
        try {
        const res = await Upload.destroy(req.body, { where: { id: req.body.id }});

        res.status(200).json(res);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}