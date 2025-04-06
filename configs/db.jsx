import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Directly pass the connection string
const connectionString = "postgresql://CURATO_AI_owner:npg_C9wmUbn3MHqA@ep-curly-breeze-a5hoci4e-pooler.us-east-2.aws.neon.tech/CURATO_AI?sslmode=require";

const sql = neon(connectionString);
const db = drizzle(sql);

export default db;
