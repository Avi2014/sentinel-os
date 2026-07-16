import { api } from "./client";

api.interceptors.request.use((config) => {
  // Future JWT token injection

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    // Future refresh token logic

    return Promise.reject(error);
  },
);