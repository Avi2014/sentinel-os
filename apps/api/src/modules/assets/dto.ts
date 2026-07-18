import type { Asset } from "./types.js";

export interface AssetResponseDto {
  id: string;
  organizationId: string;
  name: string;
  assetCode: string;
  category: string;
  location: string | null;
  status: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export function toAssetDto(asset: Asset): AssetResponseDto {
  return {
    id: asset.id,
    organizationId: asset.organizationId,
    name: asset.name,
    assetCode: asset.assetCode,
    category: asset.category,
    location: asset.location,
    status: asset.status,
    description: asset.description,
    createdAt: asset.createdAt,
    updatedAt: asset.updatedAt,
  };
}