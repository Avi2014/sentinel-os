function required(name: keyof ImportMetaEnv) {
  const value = import.meta.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const env = {
  appName: required("VITE_APP_NAME"),

  version: required("VITE_APP_VERSION"),

  apiBaseUrl: required("VITE_API_BASE_URL"),

  enableDevtools: import.meta.env.VITE_ENABLE_DEVTOOLS === "true",

  enableAI: import.meta.env.VITE_ENABLE_AI === "true",
};
