import Like from "../../models/Like.js"; // Cambiar "Comment" a "Like"

const is_property_of = async (req, res, next) => { // Cambiar el nombre de la función a "is_property_of_like"
    try {
        const like = await Like.findOne({ _id: req.params.id, user_id: req.user._id }); // Cambiar "Comment" a "Like"
        if (like) {
            return next();
        } else {
            return res.status(404).json({ message: 'you are not the owner of the like' }); // Cambiar el mensaje
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default is_property_of
