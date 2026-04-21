/**
 * Taller de Plataformas Web - Semana 5
 * Configuración de Servidor Seguro HTTPS
 */

const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080; // Usaremos 8080 para evitar conflictos de permisos de sistema

// 1. Cargar certificados de forma síncrona
const options = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.crt'))
};

// 2. Definir una ruta básica
app.get('/', (req, res) => {
    res.send('<h1>Servidor Seguro con HTTPS Activo</h1><p>Esta conexión está cifrada.</p>');
});

// 3. Crear el servidor HTTPS pasando la app de Express y las opciones SSL
https.createServer(options, app).listen(PORT, () => {
    console.log(`Servidor HTTPS ejecutándose en: https://localhost:${PORT}`);
});
