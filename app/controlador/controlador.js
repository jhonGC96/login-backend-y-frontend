//Importación de recursos

const Joi = require('joi')

//Importacion de nuestras verificaciones
const {Login} = require('./verificacion')
const {Product} = require('./verificacion')

module.exports.checkUser = async(req, res, next) =>{
    try {
        await Joi.attempt(req.body, Login, 'Los datos son incorrectos, intentalo de nuevo')
        return next()
    } catch (e) {
        console.log(e);
        res.status(500).json({error : e.message})
    }
}

//Funcion para chequear los productos
module.exports.checkProduct = async(req, res, next) =>{
    try {
        await Joi.attempt(req.body, Product, 'Los datos son incorrectos, intentalo de nuevo')
        return next()
    } catch (e) {
        console.log(e);
        res.status(500).json({error : e.message})
    }
}

    