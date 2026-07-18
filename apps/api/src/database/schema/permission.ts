import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const permissions = pgTable("permissions", {
  id: uuid("id").defaultRandom().primaryKey(),

  resource: varchar("resource", {
    length: 100,
  }).notNull(),

  action: varchar("action", {
    length: 100,
  }).notNull(),

  name: varchar("name", {
    length: 200,
  }).notNull(),

  description: text("description"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});