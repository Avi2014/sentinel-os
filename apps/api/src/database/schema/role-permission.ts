import {
  pgTable,
  primaryKey,
  uuid,
} from "drizzle-orm/pg-core";

import { roles } from "./role.js";
import { permissions } from "./permission.js";

export const rolePermissions = pgTable(
  "role_permissions",
  {
    roleId: uuid("role_id")
      .references(() => roles.id, {
        onDelete: "cascade",
      })
      .notNull(),

    permissionId: uuid("permission_id")
      .references(() => permissions.id, {
        onDelete: "cascade",
      })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.roleId, table.permissionId],
    }),
  })
);