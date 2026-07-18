import { db } from "../index.js";
import {
  permissions,
  roles,
} from "../schema/index.js";

export async function seedRBAC() {
  console.log("🌱 Seeding roles...");

  await db
    .insert(roles)
    .values([
      {
        name: "Admin",
        description: "Full system access",
      },
      {
        name: "Manager",
        description: "Manage operations",
      },
      {
        name: "Operator",
        description: "Operate assigned resources",
      },
      {
        name: "Viewer",
        description: "Read-only access",
      },
    ])
    .onConflictDoNothing();

  console.log("✅ Roles seeded");

  console.log("🌱 Seeding permissions...");

  await db
    .insert(permissions)
    .values([
      {
        resource: "users",
        action: "read",
        name: "users:read",
      },
      {
        resource: "users",
        action: "write",
        name: "users:write",
      },
      {
        resource: "organizations",
        action: "read",
        name: "organizations:read",
      },
      {
        resource: "organizations",
        action: "write",
        name: "organizations:write",
      },
    ])
    .onConflictDoNothing();

  console.log("✅ Permissions seeded");
}