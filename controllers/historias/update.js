import Historia from "../../models/Historia.js"; // Cambiar "Publicacion" a "Historia"

const updateH = {
    update: async (req, res, next) => {
        try {
            const { id } = req.params;

            // Verificar si la historia existe
            let historia = await Historia.findById(id); // Cambiar "Publicacion" a "Historia"
            if (!historia) {
                return res.status(404).json({
                    success: false,
                    message: "Historia no encontrada", // Cambiar "Publicacion no encontrada" a "Historia no encontrada"
                });
            }

            // Actualizar los datos de la historia si se proporcionan
            const { title, description, categoria, cover_photo } = req.body;

            const updatedFields = {};

            if (title) {
                updatedFields.title = title;
            }
            if (description) {
                updatedFields.description = description;
            }
            if (categoria) {
                updatedFields.categoria = categoria;
            }
            if (cover_photo) {
                updatedFields.cover_photo = cover_photo;
            }

            // Actualizar la historia
            historia = await Historia.findByIdAndUpdate(
                id,
                { $set: updatedFields },
                { new: true }
            ); // Cambiar "Publicacion" a "Historia"

            return res.status(200).json({
                success: true,
                message: "Historia actualizada exitosamente", // Cambiar "Publicacion actualizada exitosamente" a "Historia actualizada exitosamente"
                historia: historia, // Cambiar "publicacion" a "historia"
            });
        } catch (error) {
            next(error);
        }
    },
};

export default updateH;
