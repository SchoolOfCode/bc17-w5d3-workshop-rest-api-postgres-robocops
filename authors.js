import { pool } from "./db/index.js";

export async function getAuthors() {
  try {
    const result = await pool.query("SELECT * FROM authors");
    return result.rows;
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error;
  }

  // Query the database and return all authors
}

export async function getAuthorById(id) {
  // Query the database and return the author with a matching id or null
}

export async function createAuthor(author) {
  // Query the database to create an author and return the newly created author
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}
