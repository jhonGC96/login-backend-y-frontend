//Importación de nuestros recursos
const Joi = require ('joi')

//Exportamos nuestro schema

module.exports = {
    //uso de objetos
    Login : Joi.object().keys({
        nombres_usuario : Joi.string().min(3).max(50).required(),
        apellidos_usuario : Joi.string().min(5).max(70).required(),
        email_usuario : Joi.string().email(),
        username_usuario : Joi.string().regex(/^[a-zA-Z0-9]{5,20}$/).min(5).max(20).required(), 
        pass_usuario : Joi.string().regex(/^[a-zA-Z0-9]{5,20}$/).min(5).required(),
        id_tipousr : Joi.string(),
    }).with('username_usuario','pass_usuario'),
    //Uso de objetos
    Producto : Joi.object().keys({
        descricion_prod :Joi.string().min(5).max(50).required(),
        precio_prod : Joi.number().required(),
        imagen_prod : Joi.string(),
        cantidad_inventario_prod : Joi.number(),
    }),
}

