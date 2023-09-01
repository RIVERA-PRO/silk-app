import Like from "../../models/Like.js";

const likeController = {
    all_from_chapter: async (req, res, next) => {
        let pagination = {
            page: 1,
            limit: 4,
        };

        if (req.query.page) {
            pagination.page = req.query.page;
        }
        if (req.query.quantity) {
            pagination.limit = req.query.quantity;
        }

        try {
            let likes = await Like.find({ chapter_id: req.query.publicacion_id }).select('user_id publicacion_id createdAt').populate('user_id', 'name photo ');

            if (likes) {
                return res.status(200).json({
                    success: true,
                    likes
                });
            }
        } catch (error) {
            next(error);
        }
    }
}

export default likeController;
