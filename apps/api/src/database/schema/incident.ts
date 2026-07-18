import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { alerts } from "./alert.js";
import { organizations } from "./organization.js";
import { users } from "./user.js";

export const incidents = pgTable("incidents", {
  id: uuid("id").defaultRandom().primaryKey(),

  organizationId: uuid("organization_id")
    .references(() => organizations.id, {
      onDelete: "cascade",
    })
    .notNull(),

  alertId: uuid("alert_id")
    .references(() => alerts.id, {
      onDelete: "cascade",
    })
    .notNull(),

  title: varchar("title", {
    length: 200,
  }).notNull(),

  description: text("description"),

  severity: varchar("severity", {
    length: 20,
  })
    .default("MEDIUM")
    .notNull(),

  status: varchar("status", {
    length: 30,
  })
    .default("OPEN")
    .notNull(),

  assignedTo: uuid("assigned_to").references(
    () => users.id,
  ),

  resolvedBy: uuid("resolved_by").references(
    () => users.id,
  ),

  resolvedAt: timestamp("resolved_at"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});