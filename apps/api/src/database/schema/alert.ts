import {
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { organizations } from "./organization.js";
import { sensors } from "./sensor.js";
import { telemetry } from "./telemetry.js";
import { users } from "./user.js";

export const alerts = pgTable("alerts", {
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

  telemetryId: uuid("telemetry_id")
    .references(() => telemetry.id, {
      onDelete: "cascade",
    })
    .notNull(),

  rule: varchar("rule", {
    length: 100,
  }).notNull(),

  severity: varchar("severity", {
    length: 20,
  })
    .default("MEDIUM")
    .notNull(),

  message: varchar("message", {
    length: 500,
  }).notNull(),

  status: varchar("status", {
    length: 20,
  })
    .default("OPEN")
    .notNull(),

  acknowledgedBy: uuid("acknowledged_by").references(
    () => users.id,
  ),

  acknowledgedAt: timestamp("acknowledged_at"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});