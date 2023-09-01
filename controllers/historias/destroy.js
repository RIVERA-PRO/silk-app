import Historia from "../../models/Historia.js"; // Cambiar "Publicacion" a "Historia"

const destroyH = {
    destroy: async (req, res, next) => {
        try {
            let historia = await Historia.findOneAndDelete( // Cambiar "Publicacion" a "Historia"
                { _id: req.params.id }
            );
            if (historia) {
                return res.status(200).json({
                    success: true,
                    message: "Historia eliminada", // Cambiar "Publicacion eliminada" a "Historia eliminada"
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Historia not found", // Cambiar "Publicacion not found" a "Historia not found"
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default destroyH;
