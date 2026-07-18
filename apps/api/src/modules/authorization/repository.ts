import { eq } from "drizzle-orm";

import { db } from "../../database/client.js";
import { permissions } from "../../database/schema/permission.js";
import { rolePermissions } from "../../database/schema/role-permission.js";
import { userRoles } from "../../database/schema/user-role.js";

export async function findPermissionsByUserId(userId: string) {
  const result = await db
    .select({
      permission: permissions.name,
    })
    .from(userRoles)
    .innerJoin(
      rolePermissions,
      eq(userRoles.roleId, rolePermissions.roleId)
    )
    .innerJoin(
      permissions,
      eq(rolePermissions.permissionId, permissions.id)
    )
    .where(eq(userRoles.userId, userId));

  return result;
}