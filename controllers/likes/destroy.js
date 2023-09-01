import Like from "../../models/Like.js"; // Cambiar "Comment" a "Like"

const controller = {
    destroy: async (req, res, next) => {
        try {
            let { id } = req.params;
            await Like.deleteOne({ _id: id }); // Cambiar "Comment" a "Like"
            return res.status(200).json({
                message: 'like delete' // Cambiar "comment delete" a "like delete"
            });
        } catch (error) {
            next(error);
        }
    }
};

export default controller;
