const login = require('../modelo/modelo.login')
const jwt = require('jsonwebtoken')

module.exports.verificacionUsuario = async (req, res, next) => {
    let token = req.headers['authorization']
    if (token != undefined) {
        let tokenchk = token.split(' ')[1]
        let resultado = jwt.verify(tokenchk, process.env.SECRET_KEY)
        if (resultado) {
            return next()
        } else {
            throw new Error('Token no valido')
        }
    } else {
        res.status(400).json('Este sistema es privado y seguro, necesita un Token para ingresar')
    }
}
 
module.exports.chequearUsuario = async (usr) => {
    let usrchk = usr
    try {
        let resultado = await login.existenciaDeUsuario(usrchk)
        if (resultado) {
            return resultado
        } else {
            throw new Error('No existe el usuario')
        }
    } catch (err) {
        console.log(err)
        throw new Error('no semuy bien que paso')
    }
}


module.exports.generaToken = async (data) => {
    try {
        let resultado = jwt.sign({
            data
        }, process.env.SECRET_KEY
        )
        return resultado
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

module.exports.datosUsuario = async (usr) => {
    let usrchk = usr
    try {
        let resultado =  await login.recuperarInfoUser(usrchk)
        if (resultado) {
            return resultado
        }else {
            throw new Error ('No hay datos de Usuario')
        }
    }catch (err){
        console.log(err)
        throw new Error (' no semuy bien que paso')
    }
}
