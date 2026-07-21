import compression from "compression";
import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { requestLogger } from "./middleware/request-logger.js";
import { corsMiddleware } from "./middleware/cors.js";
import { swaggerSpec } from "./config/swagger.js";
import { env } from "./config/index.js";
import { errorHandler } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";
import { apiRateLimiter } from "./middleware/rate-limit.js";
import routes from "./routes/index.js";
import { requestIdMiddleware } from "./middleware/request-id.js";

const app = express();

app.use(helmet());

app.use(compression());

app.use(corsMiddleware);

app.use(requestIdMiddleware);

app.use(requestLogger);

app.use(apiRateLimiter);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec),
);

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