"# Trabajo-grupal-Taller-De-Plataforma-Web-semana-5" 
## Implementación de Servidor HTTPS Seguro

### Integrantes
* Javier Molina
* Juan Peredo
* Esteban Quijada

### Descripción
Este proyecto consiste en la configuración de un servidor seguro utilizando Node.js, Express y certificados SSL auto-firmados generados con OpenSSL. Se aplicaron conceptos de cifrado asimétrico para garantizar la privacidad en la transmisión de datos.

### Comandos para generar certificados
Para que el servidor funcione, se deben generar los archivos server.key y server.crt dentro de una carpeta llamada certs/ usando el siguiente comando en la terminal:

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certs/server.key -out certs/server.crt

### Instrucciones de ejecución
1. Asegurarse de tener instalado Node.js.
2. Ejecutar npm install para instalar Express.
3. Crear la carpeta certs/ y generar los certificados.
4. Iniciar el servidor con el comando: node app.js
