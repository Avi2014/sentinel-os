import { env } from "./env";

export const app = {
  name: env.appName,

  version: env.version,

  apiBaseUrl: env.apiBaseUrl,
};