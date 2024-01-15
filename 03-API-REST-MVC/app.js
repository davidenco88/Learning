import express from "express";
import cors from "cors";

import { moviesRouter } from "./routes/movies.js";
import { rootRouter } from "./routes/root.js";

// Creación de datos mock en la DB emulada.
import seeder from "./seeder.js";
seeder();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", rootRouter);
app.use("/movies", moviesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
