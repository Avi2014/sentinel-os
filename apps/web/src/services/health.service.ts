import { api } from "@lib/api";
import { endpoints } from "@lib/api";

export async function getHealth() {
  const response = await api.get(endpoints.health);

  return response.data;
}