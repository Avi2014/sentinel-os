import { db } from "../index.js";
import { organizations } from "../schema/index.js";

export async function seedOrganization() {
  console.log("🌱 Seeding organization...");

  await db
    .insert(organizations)
    .values({
      name: "SentinelOS Demo Organization",
      slug: "sentinel-demo",
      description: "Default organization for development",
    })
    .onConflictDoNothing();

  console.log("✅ Organization seeded");
}