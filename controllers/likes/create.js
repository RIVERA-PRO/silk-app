import Like from '../../models/Like.js' // Cambiar "Comment" a "Like"
const controller = {
    create: async (req, res, next) => {
        try {
            req.body.user_id = req.user._id;
            const publicacionId = req.query.id || req.body.publicacion_id; // Intenta obtener el ID de la publicación de la consulta o del cuerpo de la solicitud
            req.body.publicacion_id = publicacionId;

            let like = await Like.create(req.body); // Cambiar "Comment" a "Like"

            res.status(201).json({
                success: true,
                response: { like: like.number, _id: like._id }, // Cambiar "comment" a "like"
            });
        } catch (error) {
            next(error);
        }
    },
};

export default controller
