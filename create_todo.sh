curl -X POST http://localhost:8000/api/todos \
  -H "Content-Type: application/json" \
  -d '{
    "item": "Learn Deno",
    "notes": "Study Oak framework and SQLite",
    "due_date": "2025-02-01"
  }'
