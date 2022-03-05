//Funciones globales
// setIntervalo y clearInterval para ejecutar una funcion cada cierto tiempo
// let i= 0;
// let intervalo = setInterval(function(){
//     if(i===3){
//         clearInterval(intervalo);
//     }
//     i++;
//     console.log('Hola');
// }, 1000);

// SetImmediate 
// setImmediate(function(){
//     console.log('Hola');
// });

// Process
console.log(process);
// Direccion de la carpeta de node
console.log(__dirname);
// Direccion del archivo
console.log(__filename);

// Siempre evitar crear variables globales
globalThis.miVariable = 'elValor';

console.log(miVariable);