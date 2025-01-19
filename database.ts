// database.ts
import { Database } from "./deps.ts";

const db = new Database("todos.db");

// Initialize the todos table
db.prepare(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item TEXT NOT NULL,
    notes TEXT,
    due_date TEXT,
    created_date TEXT DEFAULT CURRENT_TIMESTAMP,
    completed BOOLEAN DEFAULT FALSE
  )
`).run();

export { db };
