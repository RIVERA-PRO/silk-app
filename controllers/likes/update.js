import Like from "../../models/Like.js"; // Cambiar "Comment" a "Like"

const controller = {
    update: async (req, res, next) => {
        try {
            let { id } = req.params;
            let upd = await Like.findOneAndUpdate(
                { _id: id },
                req.body,
                { new: true },
            ).select('like'); // Cambiar "Comment" a "Like"

            // Chequear la información del like y capitulo

            return res.status(200).json(upd);
        } catch (error) {
            next(error);
        }
    },
};

export default controller;
