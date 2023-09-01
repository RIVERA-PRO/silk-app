import Historia from '../../models/Historia.js'; // Cambiar "Publicacion" a "Historia"

const oneHist = {
    getOne: async (req, res, next) => {
        try {
            const historia = await Historia.findOne({ _id: req.params.id }); // Cambiar "Publicacion" a "Historia"

            if (historia) {
                return res.status(200).json({
                    historia: historia, // Cambiar "publicacion" a "historia"
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Historia no existe", // Cambiar "Publicacion no existe" a "Historia no existe"
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default oneHist;
