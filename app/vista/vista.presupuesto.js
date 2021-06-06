//Importación de modulos dados por el controlador
const controladorUsuario = require('../controlador/controlador.usuarios')
const verificacion = require('../controlador/controlador')

module.exports = async (app) => {
    app.get('/crearpresupuesto', async (req, res) => {
        try {
            res.render("crearpresupuesto")
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })
}

