import { findPermissionsByUserId } from "./repository.js";

export async function getUserPermissions(userId: string) {
  const permissions = await findPermissionsByUserId(userId);

  return permissions.map((item) => item.permission);
}

export async function hasPermission(
  userId: string,
  permission: string
) {
  const permissions = await getUserPermissions(userId);

  return permissions.includes(permission);
}