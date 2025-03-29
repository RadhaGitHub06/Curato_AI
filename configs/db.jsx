import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql=neon("postgresql://CURATO_AI_owner:npg_C9wmUbn3MHqA@ep-curly-breeze-a5hoci4e-pooler.us-east-2.aws.neon.tech/CURATO_AI?sslmode=require");
// console.log("Database URL:", process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);

const db = drizzle(sql);

