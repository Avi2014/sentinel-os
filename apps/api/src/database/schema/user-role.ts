import {
  pgTable,
  primaryKey,
  uuid,
} from "drizzle-orm/pg-core";

import { users } from "./user.js";
import { roles } from "./role.js";

export const userRoles = pgTable(
  "user_roles",
  {
    userId: uuid("user_id")
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),

    roleId: uuid("role_id")
      .references(() => roles.id, {
        onDelete: "cascade",
      })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.userId, table.roleId],
    }),
  })
);