import "server-only";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = process.env.DATABASE_URL;

const sql = neon(connectionString);
const db = drizzle(sql);

export default db;
