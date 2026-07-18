import express from "express";

import { env } from "./config/index.js";
import { errorHandler } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root endpoint
app.get("/", (_req, res) => {
  res.json({
    status: "running",
  });
});

// Versioned API routes
app.use(`${env.API_PREFIX}/${env.API_VERSION}`, routes);

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

export default app;