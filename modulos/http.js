const http = require('http');

function router(req, res) {
    console.log('Nueva peticion!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola que tal');
            break;
        default:
            res.write('Error 404: No se lo q quieres');
    }

    // Respuesta del res
    // res.writeHead(201, {
    //     'Content-Type': 'text/plain'
    // });
    
    // res.write('Hola, ya se usar HTTP de NodeJS');
    
    res.end();
}

http.createServer(router).listen(3000);

console.log('Server running at http://localhost:3000/');