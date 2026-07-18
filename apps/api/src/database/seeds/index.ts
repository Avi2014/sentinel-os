import { seedOrganization } from "./organization.js";
import { seedRBAC } from "./rbac.js";

async function seed() {
  console.log("🚀 Starting database seed...");

  await seedOrganization();
  await seedRBAC();

  console.log("🎉 Database seed completed.");
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });