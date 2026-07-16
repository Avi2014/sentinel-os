import axios from "axios";

import { app } from "@app/config";

export const api = axios.create({
  baseURL: app.apiBaseUrl,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});