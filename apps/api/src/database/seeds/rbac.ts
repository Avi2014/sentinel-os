import { eq } from "drizzle-orm";

import { db } from "../index.js";
import {
  permissions,
  rolePermissions,
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
      // Users
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

      // Organizations
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

      // Assets
      {
        resource: "assets",
        action: "read",
        name: "assets:read",
      },
      {
        resource: "assets",
        action: "write",
        name: "assets:write",
      },

      // Sensors
      {
        resource: "sensors",
        action: "read",
        name: "sensors:read",
      },
      {
        resource: "sensors",
        action: "write",
        name: "sensors:write",
      },

      // Incidents
      {
        resource: "incidents",
        action: "read",
        name: "incidents:read",
      },
      {
        resource: "incidents",
        action: "write",
        name: "incidents:write",
      },

      // Maintenance
      {
        resource: "maintenance",
        action: "read",
        name: "maintenance:read",
      },
      {
        resource: "maintenance",
        action: "write",
        name: "maintenance:write",
      },

      // Alerts
      {
        resource: "alerts",
        action: "read",
        name: "alerts:read",
      },
      {
        resource: "alerts",
        action: "write",
        name: "alerts:write",
      },

      // Reports
      {
        resource: "reports",
        action: "read",
        name: "reports:read",
      },
    ])
    .onConflictDoNothing();

  console.log("✅ Permissions seeded");

  console.log("🌱 Assigning permissions to roles...");

  const allRoles = await db.select().from(roles);
  const allPermissions = await db.select().from(permissions);

  const admin = allRoles.find((r) => r.name === "Admin");
  const manager = allRoles.find((r) => r.name === "Manager");
  const operator = allRoles.find((r) => r.name === "Operator");
  const viewer = allRoles.find((r) => r.name === "Viewer");

  if (!admin || !manager || !operator || !viewer) {
    throw new Error("Roles not found.");
  }

  const permissionMap = new Map(
    allPermissions.map((p) => [p.name, p.id]),
  );

  const assignments: {
    roleId: string;
    permissionId: string;
  }[] = [];

  function grant(roleId: string, permission: string) {
    const permissionId = permissionMap.get(permission);

    if (!permissionId) return;

    assignments.push({
      roleId,
      permissionId,
    });
  }

  // Admin → everything
  for (const permission of allPermissions) {
    grant(admin.id, permission.name);
  }

  // Manager
  [
    "assets:read",
    "assets:write",
    "sensors:read",
    "sensors:write",
    "incidents:read",
    "incidents:write",
    "maintenance:read",
    "maintenance:write",
    "alerts:read",
    "alerts:write",
    "reports:read",
  ].forEach((permission) =>
    grant(manager.id, permission),
  );

  // Operator
  [
    "assets:read",
    "sensors:read",
    "incidents:read",
    "maintenance:read",
    "alerts:read",
  ].forEach((permission) =>
    grant(operator.id, permission),
  );

  // Viewer
  [
    "assets:read",
    "sensors:read",
    "reports:read",
  ].forEach((permission) =>
    grant(viewer.id, permission),
  );

  await db
    .insert(rolePermissions)
    .values(assignments)
    .onConflictDoNothing();

  console.log("✅ Role permissions assigned");
}