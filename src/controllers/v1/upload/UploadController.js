const { Upload } = require('../../../models');

module.exports = {
    async index(req, res) {
        try {
            const res = await Upload.findAll();
            res.status(200).json(res);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    async save(req, res) {
        console.log(req.file);
            const data = {
                name: req.file.originalname,
                image: req.file.filename,
                cloudinar_id: req.file.filename,
            }
            const response = await Upload.create(data);
            console.log(response)
            res.status(200).json(response);
        try {
            
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