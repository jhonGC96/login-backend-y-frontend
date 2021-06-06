//Importación de modelos
const usuarios = require('../modelo/modelo.usuario')

//Funcion para listar usuarios
module.exports.listarUsuarios = async () => {
    // Control de errores
    try {
        //Uso de objetos
        let resultado = await usuarios.listar()
        return resultado
    } catch (e) {
        console.log(e);
        throw new Error('Error al listar')
    }
}

//Función para alta de usuarios
module.exports.altaUsuarios = async (data) => {
    //Control de errores
    try {
        //Uso de objetos
        await usuarios.alta(data)
        return 'Alta correcta'
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}

//Función para actualizar usuarios
module.exports.updateUsuario = async (data) => {
    try {
        //Uso de objetos
        let resultado = await usuarios.modificar(data)
        return resultado
    } catch (err) {
        throw new Error('No se pudo actualizar el producto seleccionado')
    }
}

module.exports.saveUpdateUsuario = async (data, id) => {
    try {
        await usuarios.modificarSave(data, id)
        return 'se actualizo correcto'
    } catch (err) {
        throw new Error('No se pudo actualizar el producto seleccionado')
    }
}

//Función para dar de baja un usuario
module.exports.bajaUsuario = async (data) => {
    //Control de errores
    try {
        //Uso de objetos
        await usuarios.eliminar(data)
        return 'Baja correcta'
    } catch (e) {
        console.log(e);
        throw new Error('Error al dar de baja  ')
    }
}

//funcion para checar que usuario no exista al dar de alta
module.exports.chequearUsuario = async (usr) => {
    let usrchk = usr
    try {
        let resultado = await usuarios.existenciaDeUsuario(usrchk)
        if (resultado) {
            return true 
        } else {
            return resultado
        }
    } catch (err) {
        console.log(err)
        throw new Error('no semuy bien que paso')
    }
}