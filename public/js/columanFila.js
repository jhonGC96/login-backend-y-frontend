
//funcion para agregar columnas a la tabla 4.2flujoEfectivo
function agregarColumna(contarColumna = 3) {
    var table = document.getElementById('tablaFlujo');
    var contarFila = table.rows.length;
    for (var i = 0; i < contarFila; i++) {
        var fila = table.rows[i];
        fila.insertCell(contarColumna);
    }
}

//otra manera de agregar filas
function agregarFila(contarColumna = 4) {
    var table = document.getElementById('tbody');
    var contarFila = table.rows.length;
    var fila = table.insertRow(contarFila);
    for (var i = 0; i < contarColumna; i++) {
        fila.insertCell(i);
    }
}


function eliminarColumna() {

}



//funcion para eliminar filas
function eliminarFila() {
    var table = document.getElementById("tablaprueba");
    var contarFila = table.rows.length;
    //console.log(rowCount);
    if (contarFila <= 1)
        alert('No se puede eliminar el encabezado');
    else
        table.deleteRow(contarFila - 1);
}

  // //funcion para eliminar Columna
  // function eliminarColumna(){

  // }