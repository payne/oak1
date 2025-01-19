// routes/todos.ts
import { Router } from "../deps.ts";
import { db } from "../database.ts";

const router = new Router();

// GET /api/todos - List all todos
router.get("/api/todos", (ctx) => {
  const todos = db.prepare("SELECT * FROM todos ORDER BY created_date DESC").all();
  ctx.response.body = todos;
});

// GET /api/todos/:id - Get a specific todo
router.get("/api/todos/:id", (ctx) => {
  const id = ctx.params.id;
  const todo = db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
  
  if (!todo) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
    return;
  }
  
  ctx.response.body = todo;
});

// POST /api/todos - Create a new todo
router.post("/api/todos", async (ctx) => {
  const body = await ctx.request.body().value;
  const { item, notes, due_date } = body;

  if (!item) {
    ctx.response.status = 400;
    ctx.response.body = { message: "Item is required" };
    return;
  }

  const insertStmt = db.prepare(
    "INSERT INTO todos (item, notes, due_date) VALUES (?, ?, ?)"
  );
  console.log(insertStmt);
  insertStmt.run([item, notes??'', due_date??'']);

  const id = db.lastInsertRowId;
  const newTodo = db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
  
  ctx.response.status = 201;
  ctx.response.body = newTodo;
});

// PUT /api/todos/:id - Update a todo
router.put("/api/todos/:id", async (ctx) => {
  const id = ctx.params.id;
  const body = await ctx.request.body().value;
  const { item, notes, due_date, completed } = body;

  const todo = db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
  if (!todo) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
    return;
  }

  const updateStmt = db.prepare(
    `UPDATE todos 
     SET item = ?, notes = ?, due_date = ?, completed = ?
     WHERE id = ?`
  );
  updateStmt.run([
    item || todo.item,
    notes !== undefined ? notes : todo.notes,
    due_date || todo.due_date,
    completed !== undefined ? completed : todo.completed,
    id
  ]);

  const updatedTodo = db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
  ctx.response.body = updatedTodo;
});

// DELETE /api/todos/:id - Delete a todo
router.delete("/api/todos/:id", (ctx) => {
  const id = ctx.params.id;
  
  const todo = db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
  if (!todo) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
    return;
  }

  db.prepare("DELETE FROM todos WHERE id = ?").run([id]);
  ctx.response.status = 204;
});

export default router;

