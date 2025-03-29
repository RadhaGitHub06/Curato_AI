// export default {
//     schema: "./configs/schema.jsx",
//     dialect: "postgresql",
//     dbCredentials: {
//         connectionString: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,  // ✅ Use `connectionString` instead of `url`
//     }
// };
export default defineConfig({
    schema: "./configs/schema.jsx",
    dialect: "postgresql",
    dbCredentials: {
      url: "postgresql://CURATO_AI_owner:npg_C9wmUbn3MHqA@ep-curly-breeze-a5hoci4e-pooler.us-east-2.aws.neon.tech/CURATO_AI?sslmode=require",
    },
  });

