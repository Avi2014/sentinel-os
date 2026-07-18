import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";

import { organizations } from "./organization.js";

export const assets = pgTable(
  "assets",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    organizationId: uuid("organization_id")
      .references(() => organizations.id, {
        onDelete: "cascade",
      })
      .notNull(),

    name: varchar("name", {
      length: 150,
    }).notNull(),

    assetCode: varchar("asset_code", {
      length: 100,
    }).notNull(),

    category: varchar("category", {
      length: 100,
    }).notNull(),

    location: varchar("location", {
      length: 255,
    }),

    status: varchar("status", {
      length: 50,
    })
      .default("ACTIVE")
      .notNull(),

    description: text("description"),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    organizationAssetCodeUnique: unique(
      "assets_organization_asset_code_unique",
    ).on(table.organizationId, table.assetCode),
  }),
);