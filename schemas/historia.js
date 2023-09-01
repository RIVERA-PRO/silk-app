import Joi from 'joi-oid';

const schema = Joi.object({


    photo: Joi
        .string()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
    mail: Joi
        .string()
        .min(3)
        .max(100)
    ,

    name: Joi
        .string()
        .min(3)
        .max(100)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            'string.required': 'the title is required',
        }),


    cover_photo: Joi
        .string()
        .min(0)
        .max(1000),
    description: Joi
        .string()
        .required()
        .min(3)
        .max(1500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 1500 characters",
            'string.required': 'the title is required',
        }),

    categoria: Joi

        .required()

        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
            'string.required': 'the description is required',
        }),
    user_id: Joi
        .objectId()
        .required(),

})

export default schema

