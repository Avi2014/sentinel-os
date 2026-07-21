import app from "./app.js";
import { appConfig, logger } from "./config/index.js";

const server = app.listen(appConfig.port, () => {
  logger.info(
    `${appConfig.name} running on port ${appConfig.port}`,
  );
});

const gracefulShutdown = (signal: string) => {
  logger.info(`${signal} received. Shutting down server...`);

  server.close(() => {
    logger.info("HTTP server closed.");
    process.exit(0);
  });

  setTimeout(() => {
    logger.error("Forced shutdown.");
    process.exit(1);
  }, 10000);
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));