function hola(nombre, callback) {
    // console.log('Hola, soy una funcion asíncrona');
    setTimeout(function(){
        console.log('Hola '+nombre);
        callback(nombre);
    },1500)
}


function adios(nombre, callback){
    setTimeout(function(){
        console.log('Adios '+nombre);
        callback();
    },1000)
}


console.log('Iniciando proceso...');
hola('Carlos', function(nombre){
    adios(nombre, function(){
        console.log('Termiando proceso...');
    });
});

// hola('Carlos', function(){});
// adios('Carlos', function(){});
