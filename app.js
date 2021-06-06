var express = require ('express')
var app = express ()
require ('dotenv').config()
const sequelize = require ('./db/db.conexion')
const vistaUsuarios = require ('./app/vista/vista.usuarios')
const vistaLogin = require ('./app/vista/vista.login')
const vistaPresupuesto = require ('./app/vista/vista.presupuesto')
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//settings
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

async function  inicioServer(){
    try {
        await sequelize.authenticate()
        console.log('Conexión Aceptada');
        app.listen(process.env.PORT, function(){
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        })
    } catch (e) {
        console.error('Conexión fallida: ',e);
    }
}

inicioServer()

app.use((err, req, res, next)=>{
    if (err){
        console.log(err);
        if(!res.headerSent){
            res.render('404',{result:err.message})
                res.status(500).send("Error en el servidor: " +err.message)
        }
    }
    next()
})

vistaUsuarios(app)
vistaLogin(app)
vistaPresupuesto(app)