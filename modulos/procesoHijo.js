const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, stderr) => {
//     if (err) {
//         // node couldn't execute the command))
//         console.error(err);
//         return false;
//     }
//     // the *entire* stdout and stderr (buffered)
//     console.log(stdout);
//     //console.log(`stderr: ${stderr}`);
// });

//let proceso = spawn('dir', ['/ah']);
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
    console.log(data.toString());
});

proceso.on('exit', () => {
    console.log('El proceso termino');
    console.log(proceso.killed);
})