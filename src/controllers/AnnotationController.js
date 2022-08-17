const Annotations = require('../models/AnnotationData');



module.exports = {

    async read(req, res) {
        const annotationList = await Annotations.find();
        return res.json(annotationList);
    },


    async create(req, res) {
        const { title, notes, priority } = req.body;

        if (!notes || !title) {
            return res.status(400).json({ error: "Required" })
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return res.json(annotationCreated);
    },

    async delete(req, res) {
        const { id } = req.params;

        const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });
        return annotationDeleted
    }
}


