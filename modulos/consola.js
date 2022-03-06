// console.group('conversacion');
// console.log('Hola');
// console.group('bla');
// console.log('Bla bla bla');
// console.log('Bla bla bla');
// console.log('Bla bla bla');
// console.groupEnd('bla');
// console.log('Adios');
// console.groupEnd('conversacion');

// console.log('Otra cosas de otra funcion');

//Como agrupar console.group() en una funcion
function function1() {
    console.group('Funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    function2();
    console.log('Hemos vuelto a la funcion 1');
    console.groupEnd('Funcion 1');
}

function function2(){
    console.group('Funcion 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('Funcion 2');
}

console.log('Empezamos');
function1();

// contador con console.count()
console.count('veces');
console.count('veces');
console.count('veces');
// Restablece el contador
console.countReset('veces');
console.count('veces');