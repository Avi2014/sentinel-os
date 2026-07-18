import {
  jsonb,
  numeric,
  pgTable,
  timestamp,
  unique,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { assets } from "./asset.js";
import { organizations } from "./organization.js";

export const sensors = pgTable(
  "sensors",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    organizationId: uuid("organization_id")
      .references(() => organizations.id, {
        onDelete: "cascade",
      })
      .notNull(),

    assetId: uuid("asset_id")
      .references(() => assets.id, {
        onDelete: "cascade",
      })
      .notNull(),

    sensorCode: varchar("sensor_code", {
      length: 100,
    }).notNull(),

    name: varchar("name", {
      length: 150,
    }).notNull(),

    type: varchar("type", {
      length: 100,
    }).notNull(),

    manufacturer: varchar("manufacturer", {
      length: 100,
    }),

    model: varchar("model", {
      length: 100,
    }),

    unit: varchar("unit", {
      length: 30,
    }),

    status: varchar("status", {
      length: 50,
    })
      .default("ACTIVE")
      .notNull(),

    lastValue: numeric("last_value"),

    lastHeartbeat: timestamp("last_heartbeat"),

    installationDate: timestamp("installation_date"),

    location: varchar("location", {
      length: 255,
    }),

    metadata: jsonb("metadata"),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    organizationSensorCodeUnique: unique(
      "sensors_organization_sensor_code_unique",
    ).on(table.organizationId, table.sensorCode),
  }),
);