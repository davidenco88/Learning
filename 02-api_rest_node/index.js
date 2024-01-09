const http = require("http");
const port = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.statusCode = 200;
  res.end("This Web Server is up and running");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
