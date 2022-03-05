// File system
const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    });
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error(err);
        }else{
            console.log("Se guardo correctamente");
        }
    });
}

function borrar(ruta, callback) {
    fs.unlink(ruta, function (err) {
        if (err) {
            console.error(err);
        }else{
            console.log("Se borro correctamente");
        }
    });
}

//leer(__dirname + '/archivo.txt', console.log);
//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
//borrar(__dirname + '/archivo1.txt', console.log);
