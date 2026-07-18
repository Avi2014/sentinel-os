export interface Asset {
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

export interface AssetFilters {
  page: number;
  limit: number;
  search?: string;
  organizationId: string;
}