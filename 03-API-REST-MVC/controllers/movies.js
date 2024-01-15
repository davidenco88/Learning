import { getAll, getById, createdItem } from "../models/movies.js";

export async function getAllMovies(req, res) {
  const movies = await getAll();
  res.status(200).json(movies);
}

export async function getMovieById(req, res) {
  const { id } = req.params;
  const movie = await getById(id);
  res.status(200).json(movie);
}

export async function createdMovie(req, res) {
  const data = req.body;
  const movie = await createdItem(data);
  res.status(201).json(movie);
}

export async function updateMovie(req, res) {
  res.status(200).send("Updated Movie");
}

export async function deleteMovie(req, res) {
  res.status(200).send("Deleted Movie");
}
