import db from "@makeitrealcamp/db-mock";

export async function getAll() {
  const movies = db.findAll();
  return movies;
}

export async function getById(id) {
  const movie = db.findById(id);
  return movie;
}

export async function createdItem(data) {
  const movie = db.insert(data);
  return movie;
}

export async function updateItem(data) {
  db.update(data);
  const movie = db.findById(data.id);
  return movie;
}

export async function deleteItem(id) {
  db.remove(id);
}
