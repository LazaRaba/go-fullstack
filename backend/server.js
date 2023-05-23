// Importation du module HTTP
const http = require('http');

// Importation du module d'application express
const app = require('./app');

// Fonction de normalisation du port d'écoute
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

// Normalisation du port d'écoute de l'application express
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Gestionnaire d'erreurs du serveur HTTP
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// Création du serveur HTTP à partir de l'application express
const server = http.createServer(app);

// Définition du gestionnaire d'erreurs du serveur HTTP
server.on('error', errorHandler);

// Définition de l'action à exécuter lorsque le serveur écoute les requêtes entrantes
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

// Lancement du serveur HTTP sur le port d'écoute
server.listen(port);
