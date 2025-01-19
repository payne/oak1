// server.ts
import { Application, send } from "./deps.ts";
import todoRouter from "./routes/todos.ts";

const app = new Application();

// Error handling middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    ctx.response.body = { message: "Internal server error" };
  }
});

// Logger middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.request.method} ${ctx.request.url} - ${ms}ms`);
});

// Routes
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

// Serve static files from dist folder for non-API routes
app.use(async (ctx) => {
  if (!ctx.request.url.pathname.startsWith("/api")) {
    try {
      await send(ctx, ctx.request.url.pathname, {
        root: `./dist`,
        index: "index.html",
      });
    } catch {
      // If file not found, serve index.html for client-side routing
      await send(ctx, "index.html", {
        root: `./dist`,
      });
    }
  }
});

// Start the server
const port = 8000;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });

