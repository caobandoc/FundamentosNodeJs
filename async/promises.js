function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500)
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Bla Bla bla ...");
            // resolve(nombre);
            reject('Hay un error');
        }, 1000);
    });
}

function adios(nombre, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000)
    });
}

// ---
console.log('Iniciando el proceso ...');
hola('Carlos')
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminado el proceso');
    })
    .catch(err => {
        console.error('Existe un error:');
        console.error(err);
    });