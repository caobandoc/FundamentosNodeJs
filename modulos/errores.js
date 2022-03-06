function otraFuncion(){
    serompe();
}

function serompe(){
    return 3 + z;
}

function seRompeAsicrono(cb){
    setTimeout(() =>{
        try{
            return 3 + z;
        }catch(e){
            console.error('Error en la funcion asincrona');
            cb(e);
        }

    }, 1000);
}

try{
    // otraFuncion();
    seRompeAsicrono(function(err) {
        console.log(err.message);
    });
} catch(e){
    console.error('Algo se a roto');
    console.error(e);
}

console.error('Final');