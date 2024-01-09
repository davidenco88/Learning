const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("This Web Server is up and running");
});

server.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});

// Creación sencilo web server
// 1. Importamos el modulo nativo de node "http".

// 2. Creamos el servidor con el metodo createServer.
//    Para este caso particular recomendamos crear la respuesta con un Status code
//    y un mensaje que se desplegara en el navegador informando que el servidor esta
//    corriendo.

// 3. habilitamos el servidor para que escuche las peticiones en el puerto configurado.
