const createdServer = require("./server.js");

const server = createdServer();

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
