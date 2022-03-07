const os = require('os');

// console.log('Arquitectura: ' + os.arch());
// console.log('Plataforma: ' + os.platform());

// console.log(os.cpus().length);

// console.log(os.constants);

// const SIZE = 1024;

// function kb(bytes) {
//     return (bytes / SIZE).toFixed(2) + ' KB';
// }

// function mb(bytes) {
//     return (bytes / SIZE / SIZE).toFixed(2) + ' MB';
// }

// function gb(bytes) {
//     return (bytes / SIZE / SIZE / SIZE).toFixed(2) + ' GB';
// }

// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// console.log(gb(os.totalmem()));

// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());
console.log(os.networkInterfaces());