import Joi from "joi-oid"; // Asumiendo que la importación de Joi-oid es correcta

const schema_like = Joi.object({ // Cambiar el nombre del esquema a "schema_like"
    // Mantener las validaciones necesarias para los likes, si es necesario
    // Puedes agregar más validaciones según tus necesidades
    like: Joi
        .number()
        .required()
        .messages({
            'number.required': 'El campo de "like" es requerido',
        }),
});

export default schema_like;
