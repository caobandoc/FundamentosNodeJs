console.time('todo');
let suma = 0;
console.time('bucle');
for(let i = 0; i < 10000000; i++){
    suma += 1;
}
console.timeEnd('bucle');


let suma2 = 0;
console.time('bucle 2');
for(let j = 0; j < 10000000; j++){
    suma += j;
}
console.timeEnd('bucle 2');

console.time('asincrona');
console.log('Empieza el proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrona');
    })

console.timeEnd('todo');

function asincrona(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Termina el proceso asincrono');
            }, 1000);
            resolve();
        });
}