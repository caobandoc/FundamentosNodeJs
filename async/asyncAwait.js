async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000)
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Bla Bla bla ...");
            resolve(nombre);
            //reject('Hay un error');
        }, 1000);
    });
}

async function adios(nombre, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000)
    });
}

async function main(){
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminado el proceso');
}

console.log('Empezando el proceso ...');
main();