/// <reference types="@types/node" />

import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/lib/server/schema.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: process.env.DATABASE_URL!,
	},
	verbose: true,
	strict: true,
});
