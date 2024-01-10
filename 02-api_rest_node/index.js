const http = require("http");
const fs = require("fs");

const port = process.env.PORT ?? 3000;
const pokemons = require("./pokemon.json");
const { error } = require("console");

// Escribo esta función para dar entendimiento a las etapas de creación del servidor.
const processRequest = (req, res) => {
  const { method, url } = req;

  // Solo dos metodos para lograr explicar el ejemplo.
  switch (method) {
    case "GET":
      switch (url) {
        case "/":
          res.statusCode = 200;
          res.end("<h1>WEB SERVER IS UP AND RUNNING</h1>");
          break;

        case "/pokemons":
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");

          // Dentro del protocolo HTTP es importante que transformemos los objetos de javascript
          // a un formato de texto que el protocolo pueda entender y recibir, en este caso se tranforma
          // a un formato de json en texto plano que luego sera.
          res.end(JSON.stringify(pokemons));
          break;

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end("<h1>404 NOT FOUND</h1>");
          break;
      }

    case "POST":
      switch (url) {
        case "/new":
          let body = "";

          // escuchar el evento data - todo este proceso lo soluciona express.js
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            const timeStamp = Date.now();

            fs.writeFile(`./new_list_${timeStamp}.json`, body, (err) => {
              if (err) {
                console.log("Error writing file");
              } else {
                console.log("New list was created successfully");
              }
            });

            //res.statusCode = 201; // Status code - Created
            res.writeHead(201, "Content-Type", "application/json");
            res.end(
              JSON.stringify({ message: "new list was created successfully" })
            );
          });
          break;
      }
      break;

    // Esta sera la respuesta en caso que no encuentre la ruta.
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>404 NOT FOUND</h1>");
      break;
  }
  console.log("Request received");
};

// Aqui es donde untilizamos la función "processRequest" pero se puede crear un callback como parametro.
const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
