import "dotenv/config";
import { defineConfig } from "drizzle-kit";


export default defineConfig({
    schema: "./configs/schema.jsx",
    dialect: "postgresql",
    dbCredentials: {
    url: process.env.DATABASE_URL,
    
    },
  });

