import type { Actions } from "./$types";
import { error } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { users } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

export const actions: Actions = {
	signup: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get("username")!.toString();
		const password = data.get("password")!.toString();
		const confirmPassword = data.get("confirm-password")!.toString();

		if (password !== confirmPassword) {
			error(400, "Passwords do not match");
		}

		const salt = randomBytes(16).toString("hex");
		const hashedPassword = scryptSync(password, salt, 64).toString("hex");

		const authorizationCode = randomBytes(16).toString("hex");

		const user = await db
			.insert(users)
			.values({
				username: username,
				password: `${salt}:${hashedPassword}`,
				image: `https://api.dicebear.com/7.x/thumbs/svg?seed=${username}`,
				authorization_code: authorizationCode,
				time_at_last_code: Date.now().toString(),
				friends: [],
			})
			.returning();

		cookies.set("user_id", user[0].id.toString(), {
			path: "/",
		});
		cookies.set("authorization_code", authorizationCode, {
			path: "/",
		});
	},
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get("username")!.toString();
		const password = data.get("password")!.toString();

		const user = await db
			.select()
			.from(users)
			.where(eq(users.username, username));

		const [salt, key] = user[0].password.split(":");
		const hashedPassword = scryptSync(password, salt, 64);
		const match = timingSafeEqual(Buffer.from(key, "hex"), hashedPassword);

		if (!match) {
			error(400, "Invalid username or password");
		} else {
			cookies.set("user_id", user[0].id.toString(), {
				path: "/",
			});
			cookies.set("authorization_code", user[0].authorization_code!, {
				path: "/",
			});
		}
	},
};
