// const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabo');
    setTimeout(() => {
        console.log('Esto no se va a ejecutar');
    }, 0);
});

//process.on('uncaughtRejection');
process.on('uncaughtException', (err, origen) => {
    console.error('Se ha producido un error: ' + err);
    setTimeout(() => {
        console.log('Esto iene desde las excepciones');
    }, 0);
});

process.on('')

noExisto();

console.log('Esto si el error no se recoje, no sale');
