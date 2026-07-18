import "dotenv/config";
import postgres from "postgres";

async function testConnection() {
  try {
    const sql = postgres(process.env.DATABASE_URL!);

    const result = await sql`SELECT version();`;

    console.log("✅ Database connected successfully!");
    console.log(result[0].version);

    await sql.end();
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error);
    process.exit(1);
  }
}

testConnection();