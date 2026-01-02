import { defineConfig } from "drizzle-kit";


export default defineConfig({
    schema: "./configs/schema.jsx",
    dialect: "postgresql",
    dbCredentials: {
    url: "postgresql://CURATO_AI_owner:npg_C9wmUbn3MHqA@ep-curly-breeze-a5hoci4e-pooler.us-east-2.aws.neon.tech/CURATO_AI?sslmode=require",
    
    },
  });

