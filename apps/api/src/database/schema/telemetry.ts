import {
  jsonb,
  numeric,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { organizations } from "./organization.js";
import { sensors } from "./sensor.js";

export const telemetry = pgTable(
  "telemetry",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    organizationId: uuid("organization_id")
      .references(() => organizations.id, {
        onDelete: "cascade",
      })
      .notNull(),

    sensorId: uuid("sensor_id")
      .references(() => sensors.id, {
        onDelete: "cascade",
      })
      .notNull(),

    value: numeric("value").notNull(),

    quality: varchar("quality", {
      length: 30,
    })
      .default("GOOD")
      .notNull(),

    recordedAt: timestamp("recorded_at")
      .defaultNow()
      .notNull(),

    metadata: jsonb("metadata"),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),
  },
);