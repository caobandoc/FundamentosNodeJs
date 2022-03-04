function hola(nombre, callback) {
    // console.log('Hola, soy una funcion asíncrona');
    setTimeout(function () {
        console.log('Hola ' + nombre);
        callback(nombre);
    }, 1500)
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log("Bla Bla bla ...");
        callbackHablar();
    }, 1000);
}

function adios(nombre, callback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        callback();
    }, 1000)
}

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    }else{
        adios(nombre, callback);
    }
}


console.log('Iniciando proceso...');
hola('Carlos', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Proceso terminado');
    });
});


// hola('Carlos', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log('Termiando proceso...');
//                 });
//             });
//         });
//     });
// });