import type { Request, Response } from "express";

import {
  createAsset,
  deleteAsset,
  getAsset,
  listAssets,
  updateAsset,
} from "./service.js";

import { toAssetDto } from "./dto.js";
import {
  createAssetSchema,
  updateAssetSchema,
} from "./validation.js";

export async function listAssetsHandler(
  req: Request,
  res: Response,
) {
  const organizationId = req.user!.organizationId;

  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 10);
  const search = req.query.search as string | undefined;

  const result = await listAssets({
    page,
    limit,
    search,
    organizationId,
  });

  return res.json({
    ...result,
    data: result.data.map(toAssetDto),
  });
}

export async function getAssetHandler(
  req: Request,
  res: Response,
) {
  const id = req.params.id as string;

  const asset = await getAsset(
    id,
    req.user!.organizationId,
  );

  if (!asset) {
    return res.status(404).json({
      message: "Asset not found",
    });
  }

  return res.json(toAssetDto(asset));
}

export async function createAssetHandler(
  req: Request,
  res: Response,
) {
  const body = createAssetSchema.parse(req.body);

  const asset = await createAsset({
    ...body,
    organizationId: req.user!.organizationId,
  });

  return res.status(201).json(toAssetDto(asset));
}

export async function updateAssetHandler(
  req: Request,
  res: Response,
) {
  const id = req.params.id as string;

  const body = updateAssetSchema.parse(req.body);

  const asset = await updateAsset(
    id,
    req.user!.organizationId,
    body,
  );

  if (!asset) {
    return res.status(404).json({
      message: "Asset not found",
    });
  }

  return res.json(toAssetDto(asset));
}

export async function deleteAssetHandler(
  req: Request,
  res: Response,
) {
  const id = req.params.id as string;

  const asset = await deleteAsset(
    id,
    req.user!.organizationId,
  );

  if (!asset) {
    return res.status(404).json({
      message: "Asset not found",
    });
  }

  return res.status(204).send();
}