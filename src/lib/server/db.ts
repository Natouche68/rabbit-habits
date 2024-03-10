import type { NeonQueryFunction } from "@neondatabase/serverless";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { DATABASE_URL } from "$env/static/private";

const sql = neon(DATABASE_URL) as NeonQueryFunction<boolean, boolean>;
export const db = drizzle(sql);
