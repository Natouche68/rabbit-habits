import type { NeonQueryFunction } from "@neondatabase/serverless";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!) as NeonQueryFunction<
	boolean,
	boolean
>;
export const db = drizzle(sql);
