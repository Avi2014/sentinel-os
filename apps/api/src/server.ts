import app from "./app.js";
import { appConfig, logger } from "./config/index.js";

app.listen(appConfig.port, () => {
  logger.info(
    `${appConfig.name} running on port ${appConfig.port}`
  );
});