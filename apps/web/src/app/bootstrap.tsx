import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { ErrorBoundary } from "@components/feedback";

import "@styles/globals.css";

export function bootstrap() {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("Root element '#root' not found.");
  }

  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
}
