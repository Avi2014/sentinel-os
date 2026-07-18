import * as repository from "./repository.js";

import type { AssetFilters } from "./types.js";

export async function listAssets(filters: AssetFilters) {
  return repository.findAll(filters);
}

export async function getAsset(
  id: string,
  organizationId: string,
) {
  return repository.findById(id, organizationId);
}

export async function createAsset(
  data: Parameters<typeof repository.create>[0],
) {
  return repository.create(data);
}

export async function updateAsset(
  id: string,
  organizationId: string,
  data: Parameters<typeof repository.update>[2],
) {
  return repository.update(id, organizationId, data);
}

export async function deleteAsset(
  id: string,
  organizationId: string,
) {
  return repository.remove(id, organizationId);
}