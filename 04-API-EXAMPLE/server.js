const express = require("express");
const cors = require("cors");
const appRouter = require("./routes");

function createServer() {
  const app = express();
  app.use(cors());

  app.use(express.json());
  app.use("/", appRouter);

  return app;
}

module.exports = createServer;
