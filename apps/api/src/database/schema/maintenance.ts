import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { assets } from "./asset.js";
import { incidents } from "./incident.js";
import { organizations } from "./organization.js";
import { users } from "./user.js";

export const maintenanceWorkOrders = pgTable(
  "maintenance_work_orders",
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

    incidentId: uuid("incident_id").references(
      () => incidents.id,
      {
        onDelete: "set null",
      },
    ),

    title: varchar("title", {
      length: 200,
    }).notNull(),

    description: text("description"),

    type: varchar("type", {
      length: 30,
    })
      .default("CORRECTIVE")
      .notNull(),

    priority: varchar("priority", {
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

    createdBy: uuid("created_by")
      .references(() => users.id)
      .notNull(),

    scheduledAt: timestamp("scheduled_at"),

    completedAt: timestamp("completed_at"),

    notes: text("notes"),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull(),
  },
);