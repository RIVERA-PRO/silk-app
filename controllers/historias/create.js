import Historia from "../../models/Historia.js"; // Cambiar "Publicacion" a "Historia"
import User from "../../models/User.js";

const historias = {
    create: async (req, res, next) => {
        try {
            const { cover_photo, mail, photo, name, categoria, description, user_id } = req.body;
            const user = await User.findById(user_id); // encuentra el usuario por su id

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!",
                });
            }

            const historia = await Historia.create({ // Cambiar "Publicacion" a "Historia"
                cover_photo,
                description,
                categoria,
                name,
                photo,
                mail,
                user_id: req.user._id // Agregar el user_id aquí
            });

            console.log(req.body);

            return res.status(201).json({
                success: true,
                message: "Historia creada", // Cambiar "Publicacion creada" a "Historia creada"
                historia, // Cambiar "publicacion" a "historia"
            });
        } catch (err) {
            next(err);
        }
    },
};

export default historias;
