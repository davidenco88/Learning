import { Router } from "express";
import {
  createdMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from "../controllers/movies.js";

export const moviesRouter = Router();

moviesRouter.get("/", getAllMovies);
moviesRouter.get("/:id", getMovieById);
moviesRouter.post("/", createdMovie);
moviesRouter.patch("/:id", updateMovie);
moviesRouter.delete("/:id", deleteMovie);
