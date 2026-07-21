import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "SentinelOS API",
      version: "1.0.0",
      description:
        "AI-powered Decision Intelligence Platform for Zero-Harm Industrial Operations.",
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Development Server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],

    tags: [
      { name: "Authentication" },
      { name: "Users" },
      { name: "Assets" },
      { name: "Sensors" },
      { name: "Telemetry" },
      { name: "Alerts" },
      { name: "Incidents" },
      { name: "Maintenance" },
    ],
  },

  apis: [
    "./src/modules/**/*.ts",
  ],
};

export const swaggerSpec =
  swaggerJSDoc(options);