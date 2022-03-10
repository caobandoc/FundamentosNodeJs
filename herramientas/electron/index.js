const { app, BrowserWindow } = require('electron');

let ventanaPrincipal;

app.on('ready', crearVentana);

function crearVentana() {
    ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        //     nodeIntegration: true
        // }
        
    });

    ventanaPrincipal.loadFile('index.html');
}

