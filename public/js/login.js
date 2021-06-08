let form = document.getElementById('loginForm');
let usuario = document.getElementById('username_usuario');
let pass = document.getElementById('pass_usuario');

class Usuarios {
    constructor(usuario, pass){
        this.usuario = usuario,
        this.pass = pass,
        this.id = "",
        this.nombre = "",
        this.email = "",
        this.tipo = "",
        this.token = ""
    }

    static async guardaUsuario (usuario) {
        localStorage.setItem("dataUsuario", JSON.stringify(usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario'))
        return resultado
    }
}
 
//Manda el post
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    Usuarios.guardaUsuario(new Usuarios(usuario.value, pass.value));
    let resultado = await fetch("http://localhost:3000/login", { 
        method: 'POST',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
            "username_usuario": usuario.value,
            "pass_usuario": pass.value
        })
    })
    let vuelta = await resultado.json();
    if(vuelta.error){
        swal({
            title: `${vuelta.error}`,
            icon: "error",
          });
    } else {
        let data = await Usuarios.recuperaUsuario();
        data.tipo = vuelta.username_usuario.id_tipousr;
        data.id = vuelta.username_usuario.id_usuario;
        data.email = vuelta.username_usuario.usuario;
        data.nombre = vuelta.username_usuario.nombres_usuario + " " + vuelta.username_usuario.apellidos_usuario;
        data.token = vuelta.token;
        Usuarios.guardaUsuario(data);
        if(data.tipo === 1){
            location.href = '/main'
        } else {
            console.log('no puedes acceder porque no eres administrador');
        }
    }
})
 